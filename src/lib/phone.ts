/**
 * Phone input helpers.
 *
 * - Strips letters and any other non-phone characters as the user types.
 * - US numbers (default) are formatted progressively as (504) 416-5896,
 *   ignoring a leading country code "1".
 * - International numbers starting with "+" are kept as "+" followed by digits (max 15).
 */
export function formatPhoneInput(raw: string): string {
  const trimmed = raw.trimStart();

  if (trimmed.startsWith("+")) {
    return "+" + trimmed.replace(/\D/g, "").slice(0, 15);
  }

  let digits = trimmed.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("1")) digits = digits.slice(1);
  digits = digits.slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/** HTML `pattern`: a complete US number "(504) 416-5896" or an international "+" number (8–15 digits). */
export const PHONE_PATTERN = String.raw`\(\d{3}\) \d{3}-\d{4}|\+\d{8,15}`;

export const PHONE_TITLE = "Enter a 10-digit US phone number, e.g. (504) 555-0192, or an international number starting with +";
