/**
 * Approved subscription prices — total GBP for the full selected term.
 * 4-device row includes the +£3/month additional-connection rate
 * (reference publishes 1–3 devices, then +£3 per extra connection).
 */

export type PlanTier = "Standard" | "Premium";
export type PlanDurationMonths = 1 | 3 | 6 | 12;
export type DeviceCount = 1 | 2 | 3 | 4;

export const PLAN_DURATIONS: readonly PlanDurationMonths[] = [
  1, 3, 6, 12,
] as const;

export const DEVICE_COUNTS: readonly DeviceCount[] = [1, 2, 3, 4] as const;

export const DURATION_LABELS: Record<PlanDurationMonths, string> = {
  1: "1 month",
  3: "3 months",
  6: "6 months",
  12: "12 months",
};

export const CATALOGUE_CATEGORIES = [
  "Available live TV channels.",
  "Sports programming where included.",
  "On-demand films and series.",
  "News and documentary categories.",
  "Family and international entertainment.",
  "Electronic Programme Guide where supported.",
] as const;

/** Standard — devices × duration → total £ */
export const STANDARD_MATRIX: Record<
  DeviceCount,
  Record<PlanDurationMonths, number>
> = {
  1: { 1: 10, 3: 20, 6: 27, 12: 42 },
  2: { 1: 18, 3: 33, 6: 42, 12: 72 },
  3: { 1: 23, 3: 43, 6: 67, 12: 107 },
  4: { 1: 26, 3: 52, 6: 85, 12: 143 },
};

/** Premium — devices × duration → total £ */
export const PREMIUM_MATRIX: Record<
  DeviceCount,
  Record<PlanDurationMonths, number>
> = {
  1: { 1: 13, 3: 23, 6: 37, 12: 57 },
  2: { 1: 23, 3: 38, 6: 67, 12: 97 },
  3: { 1: 33, 3: 58, 6: 87, 12: 137 },
  4: { 1: 36, 3: 67, 6: 105, 12: 173 },
};

export type SubscriptionTerm = {
  months: PlanDurationMonths;
  label: string;
  access: string;
  standard: number;
  premium: number;
  note: string;
  ctaLabel: string;
};

/** Homepage cards use 1-device matrix prices. */
export const SUBSCRIPTION_TERMS: readonly SubscriptionTerm[] = [
  {
    months: 1,
    label: "1 Month",
    access: "One month",
    standard: STANDARD_MATRIX[1][1],
    premium: PREMIUM_MATRIX[1][1],
    note: "Includes account setup information and access to installation guidance. A useful option if you want a short initial commitment.",
    ctaLabel: "Ask About 1 Month",
  },
  {
    months: 3,
    label: "3 Months",
    access: "Three months",
    standard: STANDARD_MATRIX[1][3],
    premium: PREMIUM_MATRIX[1][3],
    note: "Includes account setup information and access to installation guidance. Prices are for the full three-month period.",
    ctaLabel: "Choose 3 Months",
  },
  {
    months: 6,
    label: "6 Months",
    access: "Six months",
    standard: STANDARD_MATRIX[1][6],
    premium: PREMIUM_MATRIX[1][6],
    note: "Includes account setup information and access to installation guidance. Prices are for the full six-month period.",
    ctaLabel: "Choose 6 Months",
  },
  {
    months: 12,
    label: "12 Months",
    access: "Twelve months",
    standard: STANDARD_MATRIX[1][12],
    premium: PREMIUM_MATRIX[1][12],
    note: "Includes account setup information and access to installation guidance. Prices are for the full twelve-month period.",
    ctaLabel: "Choose 12 Months",
  },
] as const;

export const PRICING_TABLE_ROWS: readonly {
  months: PlanDurationMonths;
  label: string;
}[] = [
  { months: 1, label: "1 month" },
  { months: 3, label: "3 months" },
  { months: 6, label: "6 months" },
  { months: 12, label: "12 months" },
] as const;

export function priceMatrix(tier: PlanTier) {
  return tier === "Standard" ? STANDARD_MATRIX : PREMIUM_MATRIX;
}

export function formatGbp(amount: number): string {
  return `£${amount}`;
}

export function priceLabel(amount: number | null): string {
  return amount === null ? "Ask for current price" : formatGbp(amount);
}

export function accountLabel(count: DeviceCount): string {
  return count === 1 ? "1 Account" : `${count} Accounts`;
}

export function streamLabel(count: DeviceCount): string {
  if (count === 1) {
    return "1 account — 1 simultaneous stream";
  }
  return `${count} accounts — ${count} simultaneous streams`;
}

export function publishedPlanAmount(
  accounts: DeviceCount,
  months: PlanDurationMonths,
  tier: PlanTier,
): number {
  return priceMatrix(tier)[accounts][months];
}
