import { IUseInput, useInput } from "..";

export function useTextInput(initial = ""): IUseInput<string> {
  return useInput(initial, (element) => element.value);
}
