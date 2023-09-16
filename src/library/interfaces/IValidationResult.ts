export interface IValidationResult {
  valid: boolean;
  error: string;
}

export function validResult(): IValidationResult {
  return {
    valid: true,
    error: "",
  };
}

export function inValidResult(error: string): IValidationResult {
  return {
    valid: false,
    error,
  };
}
