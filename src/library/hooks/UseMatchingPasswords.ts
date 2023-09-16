import { useEffect } from "react";
import { IUseInput, ValidationBuilder, useTextInput } from "..";

export function useMatchingPasswords(): [IUseInput<string>, IUseInput<string>] {
  const first = useTextInput();
  const second = useTextInput();

  useEffect(() => {
    const result = new ValidationBuilder()
      .isRequired(first.value)
      .isRequired(second.value)
      .matches(first.value, second.value)
      .result();

    first.setValidationResult(result);
    second.setValidationResult(result);
  }, [first, second]);

  return [first, second];
}
