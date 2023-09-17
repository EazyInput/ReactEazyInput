import { IUseInput, InputType } from "..";

export function determineStyleClass(
  useInput: IUseInput<InputType>,
  constant?: string,
  error?: string,
  success?: string,
): string {
  let result = constant ?? "";

  if (useInput.dirty) {
    if (useInput.valid) {
      result += ` ${success ?? ""}`;
    } else {
      result += ` ${error ?? ""}`;
    }
  }

  return result;
}
