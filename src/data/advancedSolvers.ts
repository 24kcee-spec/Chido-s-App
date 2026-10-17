// Advanced Solvers Data & Logic for Accounting, ZimTax & IFRS

// --- 1. PAYE TAX ENGINE ---
export interface PAYEBand {
  min: number;
  max: number | null; // null for infinite upper bound
  rate: number;
}

export const PAYE_USD_ANNUAL_BANDS: PAYEBand[] = [
  { min: 0, max: 1200, rate: 0.00 },
  { min: 1200, max: 3600, rate: 0.20 },
  { min: 3600, max: 12000, rate: 0.25 },
  { min: 12000, max: 24000, rate: 0.30 },
  { min: 24000, max: 36000, rate: 0.35 },
  { min: 36000, max: null, rate: 0.40 },
];

export interface PAYEInput {
  annualSalary: number;
  nssaDeduction: number;
  pensionContribution: number;
  medicalAidContributions: number; // qualifies for 50% tax credit
  isElderly: boolean; // qualifies for $900 credit
  isBlindOrDisabled: boolean; // qualifies for $900 credit
}

export function calculatePAYE(input: PAYEInput) {
  // Allowable deductions: Pension + NSSA
  const allowableDeductions = input.nssaDeduction + input.pensionContribution;
  const taxableIncome = Math.max(0, input.annualSalary - allowableDeductions);

  let remainingTaxable = taxableIncome;
  let grossTax = 0;
  const bandBreakdown: { bandLabel: string; taxedAmount: number; rate: number; tax: number }[] = [];

  for (const band of PAYE_USD_ANNUAL_BANDS) {
    if (remainingTaxable <= 0) break;
    const bandSpan = band.max !== null ? band.max - band.min : Infinity;
    const taxableInThisBand = Math.min(remainingTaxable, bandSpan);

    const taxInThisBand = taxableInThisBand * band.rate;
    grossTax += taxInThisBand;
    remainingTaxable -= taxableInThisBand;

    bandBreakdown.push({
      bandLabel: band.max !== null ? `$${band.min.toLocaleString()} - $${band.max.toLocaleString()}` : `Over $${band.min.toLocaleString()}`,
      taxedAmount: taxableInThisBand,
      rate: band.rate,
      tax: taxInThisBand
    });
  }

  // Tax Credits under Finance Act
  const medicalCredit = input.medicalAidContributions * 0.50; // 50% credit
  const elderlyCredit = input.isElderly ? 900 : 0;
  const disabilityCredit = input.isBlindOrDisabled ? 900 : 0;
  const totalTaxCredits = medicalCredit + elderlyCredit + disabilityCredit;

  // Basic Tax after credits (cannot be less than 0)
  const taxAfterCredits = Math.max(0, grossTax - totalTaxCredits);

  // 3% AIDS Levy on tax after credits
  const aidsLevy = taxAfterCredits * 0.03;
  const totalPayePayable = taxAfterCredits + aidsLevy;
  const netTakeHome = input.annualSalary - allowableDeductions - totalPayePayable;
  const monthlyTakeHome = netTakeHome / 12;

  return {
    annualSalary: input.annualSalary,
    allowableDeductions,
    taxableIncome,
    bandBreakdown,
    grossTax,
    medicalCredit,
    elderlyCredit,
    disabilityCredit,
    totalTaxCredits,
    taxAfterCredits,
    aidsLevy,
    totalPayePayable,
    monthlyPaye: totalPayePayable / 12,
    netTakeHome,
    monthlyTakeHome,
    effectiveTaxRate: input.annualSalary > 0 ? (totalPayePayable / input.annualSalary) * 100 : 0
  };
}

// --- 2. IFRS 16 LEASE AMORTIZATION ENGINE ---
export interface LeaseAmortizationYear {
  year: number;
  openingLiability: number;
  interestExpense: number;
  payment: number;
  closingLiability: number;
  currentPortion: number;
  nonCurrentPortion: number;
  rouDepreciation: number;
  rouCarryingAmount: number;
}

export function generateLeaseSchedule(
  annualPayment: number,
  leaseTermYears: number,
  discountRate: number, // e.g. 0.10 for 10%
  inAdvance: boolean = false
): {
  initialLiability: number;
  initialROUAsset: number;
  totalInterest: number;
  totalPayments: number;
  schedule: LeaseAmortizationYear[];
} {
  // Present value calculation
  let pv = 0;
  for (let t = inAdvance ? 0 : 1; t < (inAdvance ? leaseTermYears : leaseTermYears + 1); t++) {
    pv += annualPayment / Math.pow(1 + discountRate, t);
  }

  const initialLiability = pv;
  const initialROUAsset = pv; // assuming no direct costs
  const annualRouDeprec = initialROUAsset / leaseTermYears;

  const schedule: LeaseAmortizationYear[] = [];
  let currentLiability = initialLiability;
  let currentRou = initialROUAsset;
  let totalInterest = 0;

  for (let y = 1; y <= leaseTermYears; y++) {
    const opening = currentLiability;
    let interest = 0;
    let closing = 0;

    if (inAdvance) {
      // Payment made at start of year
      const liabilityAfterPmt = Math.max(0, opening - annualPayment);
      interest = liabilityAfterPmt * discountRate;
      closing = liabilityAfterPmt + interest;
    } else {
      // Payment made at end of year
      interest = opening * discountRate;
      closing = Math.max(0, opening + interest - annualPayment);
    }

    totalInterest += interest;
    currentRou = Math.max(0, currentRou - annualRouDeprec);

    // Current portion is principal repayment in next year (or closing if final year)
    const nextClosing = y === leaseTermYears ? 0 : closing - (annualPayment - (closing * discountRate));
    const currentPortion = Math.max(0, closing - Math.max(0, nextClosing));
    const nonCurrentPortion = Math.max(0, closing - currentPortion);

    schedule.push({
      year: y,
      openingLiability: opening,
      interestExpense: interest,
      payment: annualPayment,
      closingLiability: closing,
      currentPortion,
      nonCurrentPortion,
      rouDepreciation: annualRouDeprec,
      rouCarryingAmount: currentRou
    });

    currentLiability = closing;
  }

  return {
    initialLiability,
    initialROUAsset,
    totalInterest,
    totalPayments: annualPayment * leaseTermYears,
    schedule
  };
}

// --- 3. IAS 12 DEFERRED TAX BALANCE SHEET SCHEDULE ---
export interface DeferredTaxItem {
  id: string;
  name: string;
  carryingAmount: number;
  taxBase: number;
  type: 'Asset' | 'Liability';
}

export function calculateDeferredTaxSchedule(items: DeferredTaxItem[], taxRate: number = 0.2472) {
  let totalTaxableTempDiff = 0;
  let totalDeductibleTempDiff = 0;

  const rows = items.map(item => {
    let diff = 0;
    let category: 'Taxable (DTL)' | 'Deductible (DTA)' | 'Nil' = 'Nil';

    if (item.type === 'Asset') {
      diff = item.carryingAmount - item.taxBase;
      if (diff > 0) category = 'Taxable (DTL)';
      else if (diff < 0) category = 'Deductible (DTA)';
    } else {
      // Liability
      diff = item.taxBase - item.carryingAmount;
      if (diff > 0) category = 'Taxable (DTL)';
      else if (diff < 0) category = 'Deductible (DTA)';
    }

    const absDiff = Math.abs(diff);
    if (category === 'Taxable (DTL)') totalTaxableTempDiff += absDiff;
    if (category === 'Deductible (DTA)') totalDeductibleTempDiff += absDiff;

    return {
      ...item,
      difference: diff,
      absDifference: absDiff,
      category,
      deferredTaxAmount: absDiff * taxRate
    };
  });

  const netTemporaryDifference = totalTaxableTempDiff - totalDeductibleTempDiff;
  const netDeferredTaxLiability = netTemporaryDifference * taxRate;

  return {
    rows,
    totalTaxableTempDiff,
    totalDeductibleTempDiff,
    grossDTL: totalTaxableTempDiff * taxRate,
    grossDTA: totalDeductibleTempDiff * taxRate,
    netDeferredTaxLiability,
    isNetLiability: netDeferredTaxLiability > 0
  };
}

// --- 4. CVP & STANDARD COSTING VARIANCES ---
export interface CVPInput {
  sellingPricePerUnit: number;
  variableCostPerUnit: number;
  totalFixedCosts: number;
  budgetedUnits: number;
}

export function calculateCVP(input: CVPInput) {
  const unitContribution = input.sellingPricePerUnit - input.variableCostPerUnit;
  const csRatio = input.sellingPricePerUnit > 0 ? unitContribution / input.sellingPricePerUnit : 0;
  const breakevenUnits = unitContribution > 0 ? input.totalFixedCosts / unitContribution : 0;
  const breakevenRevenue = breakevenUnits * input.sellingPricePerUnit;
  const marginOfSafetyUnits = Math.max(0, input.budgetedUnits - breakevenUnits);
  const marginOfSafetyPercent = input.budgetedUnits > 0 ? (marginOfSafetyUnits / input.budgetedUnits) * 100 : 0;
  const budgetedProfit = (input.budgetedUnits * unitContribution) - input.totalFixedCosts;

  return {
    unitContribution,
    csRatio,
    breakevenUnits,
    breakevenRevenue,
    marginOfSafetyUnits,
    marginOfSafetyPercent,
    budgetedProfit
  };
}

export interface VarianceInput {
  standardPricePerKg: number;
  standardKgPerUnit: number;
  actualUnitsProduced: number;
  actualKgUsed: number;
  actualTotalMaterialCost: number;
  standardLabourRatePerHour: number;
  standardHoursPerUnit: number;
  actualHoursWorked: number;
  actualTotalLabourCost: number;
}

export function calculateVariances(input: VarianceInput) {
  // Material Price Variance = (Standard Price - Actual Price) × Actual Quantity
  const actualPricePerKg = input.actualKgUsed > 0 ? input.actualTotalMaterialCost / input.actualKgUsed : 0;
  const materialPriceVariance = (input.standardPricePerKg - actualPricePerKg) * input.actualKgUsed;

  // Material Usage Variance = (Standard Quantity for Actual Production - Actual Quantity) × Standard Price
  const standardKgAllowed = input.actualUnitsProduced * input.standardKgPerUnit;
  const materialUsageVariance = (standardKgAllowed - input.actualKgUsed) * input.standardPricePerKg;

  // Total Material Variance
  const totalMaterialVariance = materialPriceVariance + materialUsageVariance;

  // Labour Rate Variance = (Standard Rate - Actual Rate) × Actual Hours
  const actualRatePerHour = input.actualHoursWorked > 0 ? input.actualTotalLabourCost / input.actualHoursWorked : 0;
  const labourRateVariance = (input.standardLabourRatePerHour - actualRatePerHour) * input.actualHoursWorked;

  // Labour Efficiency Variance = (Standard Hours for Actual Production - Actual Hours) × Standard Rate
  const standardHoursAllowed = input.actualUnitsProduced * input.standardHoursPerUnit;
  const labourEfficiencyVariance = (standardHoursAllowed - input.actualHoursWorked) * input.standardLabourRatePerHour;

  // Total Labour Variance
  const totalLabourVariance = labourRateVariance + labourEfficiencyVariance;

  return {
    actualPricePerKg,
    materialPriceVariance,
    standardKgAllowed,
    materialUsageVariance,
    totalMaterialVariance,
    actualRatePerHour,
    labourRateVariance,
    standardHoursAllowed,
    labourEfficiencyVariance,
    totalLabourVariance
  };
}
