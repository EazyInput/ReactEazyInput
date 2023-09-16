import {
  IValidationResult,
  IValidator,
  MatchesValidator,
  RequiredValidator,
} from "../..";

export class ValidationBuilder {
  private validators: Array<IValidator>;

  public constructor() {
    this.validators = [];
  }

  public result(): IValidationResult {
    const results = this.validators.map((validator) => validator.valid());

    return {
      valid: results.every((result) => result.valid),
      error: results.find((result) => result.error !== "")?.error ?? "",
    };
  }

  public isRequired(value: string): ValidationBuilder {
    this.validators.push(new RequiredValidator(value));
    return this;
  }

  public matches(first: string, second: string): ValidationBuilder {
    this.validators.push(new MatchesValidator(first, second));
    return this;
  }
}
