import {
  IValidationResult,
  IValidator,
  inValidResult,
  validResult,
} from "../..";

export class MatchesValidator implements IValidator {
  private first: string;
  private second: string;

  public constructor(first: string, second: string) {
    this.first = first;
    this.second = second;
  }

  public valid(): IValidationResult {
    return this.first === this.second
      ? validResult()
      : inValidResult("The values must match.");
  }
}
