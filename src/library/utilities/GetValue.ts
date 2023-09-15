import { IUseInput, InputType } from "..";

export function getValue(
  inputType: string,
  useInput: IUseInput<InputType>
): string {
  switch (inputType) {
    case "text":
      return useInput.value.toString();
    default:
      return useInput.value.toString();
  }
}
