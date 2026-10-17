export interface IFRSStandard {
  code: string;
  title: string;
  category: 'Assets' | 'Liabilities & Equity' | 'Revenue & Leases' | 'Group Accounts' | 'Presentation & Tax';
  coreObjective: string;
  keyDefinitions: { term: string; definition: string }[];
  recognitionAndMeasurement: string[];
  proformaJournals: {
    title: string;
    description: string;
    entries: { account: string; debit?: string; credit?: string }[];
  }[];
  examPitfalls: string[];
}

export const IFRS_STANDARDS: IFRSStandard[] = [
  {
    code: 'IFRS 10',
    title: 'Consolidated Financial Statements',
    category: 'Group Accounts',
    coreObjective: 'Establishes principles for the presentation and preparation of consolidated financial statements when an entity controls one or more other entities.',
    keyDefinitions: [
      { term: 'Control', definition: 'An investor controls an investee when it is exposed, or has rights, to variable returns from its involvement with the investee and has the ability to affect those returns through its power over the investee.' },
      { term: 'Non-Controlling Interest (NCI)', definition: 'The equity in a subsidiary not attributable, directly or indirectly, to a parent entity.' },
      { term: 'Goodwill', definition: 'Future economic benefits arising from other assets acquired in a business combination that are not individually identified and separately recognised.' }
    ],
    recognitionAndMeasurement: [
      'Eliminate the carrying amount of the parent investment in each subsidiary and the parent portion of equity of each subsidiary.',
      'Eliminate in full intra-group assets, liabilities, equity, income, expenses, and cash flows relating to transactions between entities of the group.',
      'Eliminate unrealised profits from intra-group transactions (PURP) from assets such as inventory and fixed assets.',
      'Measure NCI either at fair value (full goodwill method) or at the NCI proportionate share of net identifiable assets (proportionate method).'
    ],
    proformaJournals: [
      {
        title: 'Pre-Acquisition Elimination & Goodwill Recognition',
        description: 'Eliminates parent investment against subsidiary share capital, share premium, and pre-acquisition retained earnings.',
        entries: [
          { account: 'Dr Share Capital (Subsidiary)', debit: 'Nominal value' },
          { account: 'Dr Share Premium (Subsidiary)', debit: 'Pre-acq balance' },
          { account: 'Dr Retained Earnings (Pre-acquisition)', debit: 'Pre-acq balance' },
          { account: 'Dr Fair Value Uplift on Identifiable Net Assets', debit: 'FV excess' },
          { account: 'Dr Goodwill (Statement of Financial Position)', debit: 'Balancing figure' },
          { account: 'Cr Investment in Subsidiary (Cost)', credit: 'Consideration transferred' },
          { account: 'Cr Non-Controlling Interest (at acquisition)', credit: 'NCI share / Fair value' }
        ]
      },
      {
        title: 'Provision for Unrealised Profit (PURP) on Inventory (Downstream: Parent to Sub)',
        description: 'Elimination of unrealised profit remaining in closing inventory sold by parent to subsidiary.',
        entries: [
          { account: 'Dr Cost of Sales / Group Retained Earnings (Parent)', debit: 'Unrealised margin' },
          { account: 'Cr Inventory (Group SFP)', credit: 'Unrealised margin' }
        ]
      },
      {
        title: 'Provision for Unrealised Profit (PURP) on Inventory (Upstream: Sub to Parent)',
        description: 'Elimination of unrealised profit where subsidiary was the seller; split between Group Retained Earnings and NCI.',
        entries: [
          { account: 'Dr Cost of Sales (Subsidiary)', debit: 'Unrealised margin' },
          { account: 'Cr Inventory (Group SFP)', credit: 'Unrealised margin' },
          { account: 'Note:', debit: 'Reduces subsidiary profit, therefore allocating NCI % to NCI reserve' }
        ]
      }
    ],
    examPitfalls: [
      'Forgetting that upstream PURP reduces subsidiary profits and therefore impacts the NCI share of profit!',
      'Using the post-acquisition retained earnings instead of pre-acquisition retained earnings when calculating acquisition goodwill.',
      'Failing to adjust deferred tax on fair value adjustments at acquisition date.'
    ]
  },
  {
    code: 'IFRS 15',
    title: 'Revenue from Contracts with Customers',
    category: 'Revenue & Leases',
    coreObjective: 'Establishes a comprehensive framework for determining whether, how much, and when revenue is recognised using a core 5-step model.',
    keyDefinitions: [
      { term: 'Step 1: Identify Contract', definition: 'Agreement between two or more parties that creates enforceable rights and obligations with commercial substance and probable collection.' },
      { term: 'Step 2: Identify Performance Obligations', definition: 'Promises in a contract to transfer distinct goods or services to the customer.' },
      { term: 'Step 3: Determine Transaction Price', definition: 'The amount of consideration to which an entity expects to be entitled, net of variable consideration, financing components, and consideration payable to customer.' },
      { term: 'Step 4: Allocate Transaction Price', definition: 'Allocate based on relative standalone selling prices (SSP) of each distinct performance obligation.' },
      { term: 'Step 5: Recognise Revenue', definition: 'Recognise when (or as) the entity satisfies a performance obligation (over time or at a point in time).' }
    ],
    recognitionAndMeasurement: [
      'Recognise revenue over time if: customer simultaneously receives & consumes benefits, entity creates/enhances an asset customer controls, or entity has enforceable right to payment for performance completed to date.',
      'Contract Assets arise when goods/services transferred exceed unconditional rights to consideration (billed invoices).',
      'Contract Liabilities (deferred revenue) arise when customer pays consideration before goods or services are delivered.'
    ],
    proformaJournals: [
      {
        title: 'Sale of Equipment Bundled with 2-Year Maintenance Service',
        description: 'Allocation of package price based on Standalone Selling Prices (SSP).',
        entries: [
          { account: 'Dr Cash / Trade Receivables', debit: 'Total contract price' },
          { account: 'Cr Revenue (Immediate: Equipment)', credit: 'Allocated SSP for equipment' },
          { account: 'Cr Contract Liability (Deferred Maintenance Revenue)', credit: 'Allocated SSP for maintenance' }
        ]
      },
      {
        title: 'Release of Maintenance Revenue Over Time',
        description: 'Monthly or annual release as maintenance obligation is satisfied.',
        entries: [
          { account: 'Dr Contract Liability (Deferred Revenue)', debit: 'Recognised tranche' },
          { account: 'Cr Revenue (Maintenance Service)', credit: 'Recognised tranche' }
        ]
      }
    ],
    examPitfalls: [
      'Allocating discounts equally rather than proportionately based on standalone selling price!',
      'Failing to identify that an extended warranty beyond statutory assurance is a distinct performance obligation requiring separate revenue allocation.'
    ]
  },
  {
    code: 'IFRS 16',
    title: 'Leases',
    category: 'Revenue & Leases',
    coreObjective: 'Eliminates off-balance sheet operating leases for lessees, requiring recognition of a Right-of-Use (ROU) asset and a corresponding lease liability.',
    keyDefinitions: [
      { term: 'Lease', definition: 'A contract that conveys the right to control the use of an identified asset for a period of time in exchange for consideration.' },
      { term: 'Right-of-Use (ROU) Asset', definition: 'An asset that represents a lessee right to use an underlying asset for the lease term.' },
      { term: 'Incremental Borrowing Rate (IBR)', definition: 'The rate of interest that a lessee would have to pay to borrow over a similar term, with similar security, the funds necessary to obtain an asset of similar value.' }
    ],
    recognitionAndMeasurement: [
      'Initial Lease Liability = Present value of lease payments discounted at interest rate implicit in the lease (or IBR).',
      'Initial ROU Asset = Initial lease liability + lease payments made at or before commencement + initial direct costs + dismantling restoration estimate - lease incentives received.',
      'Subsequent measurement: Lease liability increases with interest expense and decreases with rental payments; ROU asset is depreciated straight-line over the shorter of lease term or useful life.'
    ],
    proformaJournals: [
      {
        title: 'Initial Recognition of Lease on Commencement Date',
        description: 'Recording ROU asset and lease liability at present value.',
        entries: [
          { account: 'Dr Right-of-Use Asset (Non-current assets)', debit: 'PV + Direct costs' },
          { account: 'Cr Lease Liability (Present Value)', credit: 'PV of lease payments' },
          { account: 'Cr Bank (Initial Direct Costs / Upfront payment)', credit: 'Direct cash paid' }
        ]
      },
      {
        title: 'Annual Lease Payment & Interest Accrual',
        description: 'Recording finance charge and cash payment split between current and non-current liability.',
        entries: [
          { account: 'Dr Finance Expense (Profit or Loss)', debit: 'Carrying liability × IBR' },
          { account: 'Cr Lease Liability', credit: 'Carrying liability × IBR' },
          { account: 'Dr Lease Liability', debit: 'Annual rental paid' },
          { account: 'Cr Bank', credit: 'Annual rental paid' },
          { account: 'Dr Depreciation Expense (Profit or Loss)', debit: 'ROU Cost / Lease Term' },
          { account: 'Cr Accumulated Depreciation - ROU Asset', credit: 'ROU Cost / Lease Term' }
        ]
      }
    ],
    examPitfalls: [
      'Splitting lease liability between Current Liabilities (principal repayment within next 12 months) and Non-Current Liabilities on the balance sheet!',
      'Including variable lease payments linked to future sales in the initial lease liability (they are expensed when incurred, not capitalized!).'
    ]
  },
  {
    code: 'IAS 12',
    title: 'Income Taxes & Deferred Tax',
    category: 'Presentation & Tax',
    coreObjective: 'Prescribes the accounting treatment for income taxes, addressing the current tax consequences and future recovery (settlement) of carrying amounts of assets and liabilities (deferred tax).',
    keyDefinitions: [
      { term: 'Tax Base', definition: 'The amount attributed to an asset or liability for tax purposes.' },
      { term: 'Taxable Temporary Difference', definition: 'A temporary difference that will result in taxable amounts in determining taxable profit of future periods (Carrying Amount of Asset > Tax Base of Asset), giving rise to a Deferred Tax Liability (DTL).' },
      { term: 'Deductible Temporary Difference', definition: 'A temporary difference that will result in deductible amounts in future periods (Carrying Amount of Asset < Tax Base of Asset), giving rise to a Deferred Tax Asset (DTA).' }
    ],
    recognitionAndMeasurement: [
      'Deferred tax formula: (Carrying Amount - Tax Base) × Enacted Tax Rate.',
      'DTAs are recognised only to the extent that it is probable that future taxable profits will be available against which the temporary difference can be utilised.',
      'Deferred tax is never discounted to present value.'
    ],
    proformaJournals: [
      {
        title: 'Increase in Deferred Tax Liability (Accelerated Capital Allowances)',
        description: 'When tax allowances exceed accounting depreciation, carrying amount exceeds tax base.',
        entries: [
          { account: 'Dr Income Tax Expense (Profit or Loss)', debit: 'Movement in DTL' },
          { account: 'Cr Deferred Tax Liability (Statement of Financial Position)', credit: 'Movement in DTL' }
        ]
      },
      {
        title: 'Deferred Tax on Revaluation of PPE (IAS 16 Revaluation Surplus)',
        description: 'Deferred tax arising on revaluation surplus is recognised in Other Comprehensive Income (OCI), not P&L.',
        entries: [
          { account: 'Dr Revaluation Surplus (Other Comprehensive Income)', debit: 'Surplus × Tax Rate' },
          { account: 'Cr Deferred Tax Liability (Statement of Financial Position)', credit: 'Surplus × Tax Rate' }
        ]
      }
    ],
    examPitfalls: [
      'Routing deferred tax on revaluation surplus through profit or loss instead of Other Comprehensive Income (OCI)!',
      'Forgetting that goodwill initial recognition has an explicit exception from deferred tax recognition under IAS 12.15.'
    ]
  },
  {
    code: 'IAS 36',
    title: 'Impairment of Assets',
    category: 'Assets',
    coreObjective: 'Ensures that assets are carried at no more than their recoverable amount, and prescribes how recoverable amount is calculated.',
    keyDefinitions: [
      { term: 'Recoverable Amount', definition: 'The higher of an asset fair value less costs of disposal (FVLCOD) and its value in use (VIU).' },
      { term: 'Value in Use (VIU)', definition: 'The present value of the future cash flows expected to be derived from an asset or cash-generating unit.' },
      { term: 'Cash-Generating Unit (CGU)', definition: 'The smallest identifiable group of assets that generates cash inflows that are largely independent of the cash inflows from other assets.' }
    ],
    recognitionAndMeasurement: [
      'If Carrying Amount > Recoverable Amount, write down asset immediately and recognise Impairment Loss in Profit or Loss (unless asset was previously revalued, where it first reduces revaluation surplus).',
      'Allocation of CGU impairment: First to write off any allocated Goodwill; then to other assets of the unit pro-rata based on carrying amount.',
      'Reversal of impairment losses is prohibited for Goodwill, but permitted for other assets up to what the carrying amount would have been without the impairment.'
    ],
    proformaJournals: [
      {
        title: 'Impairment of CGU with Allocated Goodwill',
        description: 'Goodwill absorbed first, remaining impairment apportioned across PPE.',
        entries: [
          { account: 'Dr Impairment Loss (Profit or Loss)', debit: 'Total impairment' },
          { account: 'Cr Goodwill (Statement of Financial Position)', credit: 'Goodwill carrying amount' },
          { account: 'Cr Accumulated Impairment - Plant & Machinery', credit: 'Pro-rata share' },
          { account: 'Cr Accumulated Impairment - Buildings', credit: 'Pro-rata share' }
        ]
      }
    ],
    examPitfalls: [
      'Writing an asset below the highest of its individual FVLCOD, VIU, or zero during CGU pro-rata apportionment.',
      'Reversing an impairment loss on Goodwill in subsequent years (strictly prohibited by IAS 36!).'
    ]
  }
];
