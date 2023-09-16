import {
  IValidationResult,
  IValidator,
  inValidResult,
  validResult,
} from "../..";

export class RequiredValidator implements IValidator {
  private value: string;

  public constructor(value: string) {
    this.value = value;
  }

  public valid(): IValidationResult {
    return this.value !== null &&
      this.value !== undefined &&
      this.value.length > 0
      ? validResult()
      : inValidResult("A value is required.");
  }
}
