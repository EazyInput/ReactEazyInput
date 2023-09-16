import { IUseInput, IValidationResult, useInput } from "..";

export function useTextInput(
  initial = "",
  validationFunc?: (value: string) => IValidationResult,
): IUseInput<string> {
  return useInput(initial, (element) => element.value, validationFunc);
}
