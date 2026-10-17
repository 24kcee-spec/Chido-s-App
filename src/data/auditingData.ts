export interface AuditAssertion {
  name: string;
  category: 'Classes of Transactions' | 'Account Balances (Year-End)' | 'Presentation & Disclosure';
  definition: string;
  typicalMisstatement: string;
  primaryAuditProcedures: string[];
}

export const AUDIT_ASSERTIONS: AuditAssertion[] = [
  {
    name: 'Existence',
    category: 'Account Balances (Year-End)',
    definition: 'Assets, liabilities, and equity interests exist at the period end date.',
    typicalMisstatement: 'Fictitious inventory listed in stock count; phantom fixed assets; uncollectible non-existent debtors.',
    primaryAuditProcedures: [
      'Physically inspect physical assets (PPE, inventory observation at year-end count).',
      'Obtain direct external debtor circularisation confirmations (positive confirmations).',
      'Inspect original title deeds, vehicle registration documents, and physical asset tags.'
    ]
  },
  {
    name: 'Rights and Obligations',
    category: 'Account Balances (Year-End)',
    definition: 'The entity holds or controls the rights to assets, and liabilities are the obligations of the entity.',
    typicalMisstatement: 'Including inventory held on consignment as owned stock; pledging assets as security without disclosure; debt held by directors listed as company debt.',
    primaryAuditProcedures: [
      'Examine purchase invoices, contracts, lease agreements, and vehicle logbooks in entity legal name.',
      'Inquire management regarding third-party inventory on consignment on entity premises and exclude from count.',
      'Circularise entity solicitors and inspect bank confirmation letters for encumbered assets / covenants.'
    ]
  },
  {
    name: 'Completeness',
    category: 'Account Balances (Year-End)',
    definition: 'All assets, liabilities, and equity interests that should have been recorded have been recorded.',
    typicalMisstatement: 'Unrecorded trade liabilities; unrecorded warranty or legal provisions; off-balance sheet liabilities.',
    primaryAuditProcedures: [
      'Perform search for unrecorded liabilities by inspecting post-year-end cash disbursements and supplier invoices.',
      'Reconcile supplier monthly statements with year-end trade payables ledger balances.',
      'Trace physical assets observed on factory floor back to the fixed asset register (floor-to-sheet).'
    ]
  },
  {
    name: 'Valuation and Allocation',
    category: 'Account Balances (Year-End)',
    definition: 'Assets, liabilities, and equity interests are included in the financial statements at appropriate amounts and any resulting valuation or allocation adjustments are appropriately recorded.',
    typicalMisstatement: 'Inventory valued above net realisable value (NRV); inadequate allowance for expected credit losses (ECL); obsolete PPE not impaired.',
    primaryAuditProcedures: [
      'Test net realisable value by comparing inventory cost to post-year-end sales prices on customer invoices.',
      'Review aging analysis of trade receivables and recalculate expected credit loss provision against historical default rates.',
      'Evaluate independent property valuer qualifications, assumptions, and recalculate revaluation surplus under IAS 16.'
    ]
  },
  {
    name: 'Occurrence',
    category: 'Classes of Transactions',
    definition: 'Transactions and events that have been recorded have occurred and pertain to the entity.',
    typicalMisstatement: 'Fictitious revenue recorded before year-end to boost earnings; unapproved payments.',
    primaryAuditProcedures: [
      'Select a sample of sales transactions from sales ledger and inspect matched customer purchase order, delivery note (GDN signed by customer), and sales invoice.',
      'Test journal entries recorded around year-end with unusual credits to revenue.'
    ]
  },
  {
    name: 'Cut-off',
    category: 'Classes of Transactions',
    definition: 'Transactions and events have been recorded in the correct accounting period.',
    typicalMisstatement: 'Recording January sales in December; delaying recording of December purchase invoices until January.',
    primaryAuditProcedures: [
      'Select the last 20 goods dispatched notes (GDNs) before year-end and first 20 GDNs after year-end; trace to sales invoices and ledgers to verify correct period recognition.',
      'Select the last 20 goods received notes (GRNs) before year-end and first 20 after; trace to purchase invoices and accounts payable.'
    ]
  },
  {
    name: 'Accuracy',
    category: 'Classes of Transactions',
    definition: 'Amounts and other data relating to recorded transactions and events have been recorded appropriately.',
    typicalMisstatement: 'Mathematical errors in billing; wrong foreign exchange rate conversion; incorrect discounting.',
    primaryAuditProcedures: [
      'Recalculate invoice mathematical extensions (quantity × unit price + VAT = total).',
      'Verify exchange rates used to convert foreign currency sales against central bank official spot rates on transaction date.'
    ]
  }
];

export interface CPCThreat {
  threat: string;
  definition: string;
  scenarioExample: string;
  appropriateSafeguards: string[];
}

export const CPC_THREATS: CPCThreat[] = [
  {
    threat: 'Self-Interest Threat',
    definition: 'The threat that a financial or other interest will inappropriately influence the professional judgment or behaviour.',
    scenarioExample: 'Audit partner owns shares in the audit client or audit firm fee dependency from one client exceeds 15% of total billings.',
    appropriateSafeguards: [
      'Dispose of the direct financial interest immediately.',
      'Remove the individual from the audit engagement team.',
      'Approve independent pre-issuance quality review by a partner external to the engagement.'
    ]
  },
  {
    threat: 'Self-Review Threat',
    definition: 'The threat that an audit team will not appropriately evaluate the results of a previous judgment made or service performed by themselves.',
    scenarioExample: 'Audit firm prepares accounting records, financial statements, or internal audit work for an audit client.',
    appropriateSafeguards: [
      'Use separate personnel not involved in the audit to perform permissible non-assurance services.',
      'Refuse prohibited bookkeeping services for public interest entities (PIEs).',
      'Have an independent reviewer check the valuation models.'
    ]
  },
  {
    threat: 'Familiarity Threat',
    definition: 'The threat that due to a long or close relationship with a client, the auditor will be too sympathetic to their interests.',
    scenarioExample: 'Audit partner has led the audit of the client for 10 consecutive years; or partner close relative is CFO of the client.',
    appropriateSafeguards: [
      'Mandatory audit partner rotation every 5 or 7 years (cooling off period).',
      'Remove individual whose close relative is in key management at client.',
      'Independent external peer review of working papers.'
    ]
  },
  {
    threat: 'Advocacy Threat',
    definition: 'The threat that an auditor will promote a client position to the point that objectivity is compromised.',
    scenarioExample: 'Auditor acts as legal advocate for the client in a dispute with the tax authority (ZIMRA) or promotes client shares in an IPO.',
    appropriateSafeguards: [
      'Decline acting as advocate in legal or dispute resolution proceedings.',
      'Use independent legal counsel for tax tribunal representations.'
    ]
  },
  {
    threat: 'Intimidation Threat',
    definition: 'The threat that an auditor will be deterred from acting objectively because of actual or perceived pressures.',
    scenarioExample: 'Client threatens to replace audit firm unless auditor agrees to improper revenue recognition or reduces audit fee unreasonably.',
    appropriateSafeguards: [
      'Escalate the matter directly to the audit committee and board of directors.',
      'Involve senior technical partner consultation.',
      'Resign from the engagement if pressure compromises professional ethics.'
    ]
  }
];
