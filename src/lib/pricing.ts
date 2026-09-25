/**
 * Single source of approved pricing for /iptv-plans/.
 * Amounts are total GBP for the full selected term.
 * 4-device row includes the +£3/month additional-connection rate from the
 * reference matrix (proposal until confirmed as a published offer).
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

export function priceMatrix(tier: PlanTier) {
  return tier === "Standard" ? STANDARD_MATRIX : PREMIUM_MATRIX;
}

export function formatGbp(amount: number): string {
  return `£${amount}`;
}

export function deviceRowLabel(count: DeviceCount): string {
  if (count === 1) return "1 device";
  return `${count} devices`;
}
