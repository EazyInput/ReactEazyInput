import { IValidationResult } from "..";

export function matchingPasswords(
  first: string,
  second: string,
  message = "Password's must match.",
): IValidationResult {
  return first === second
    ? { valid: true, error: "" }
    : { valid: false, error: message };
}
