import { IValidationResult } from "../..";

export interface IValidator {
  valid: () => IValidationResult;
}
