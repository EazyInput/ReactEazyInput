import { useState } from "react";
import { IUseInput, IValidationResult, InputType } from "..";

export function useInput<TInputType extends InputType>(
  initial: TInputType,
  mappingFunc: (element: HTMLInputElement) => TInputType,
  validationFunc?: (value: TInputType) => IValidationResult,
): IUseInput<TInputType> {
  const [value, updateValue] = useState<TInputType>(initial);
  const [valid, setValid] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [dirty, setDirty] = useState<boolean>(false);

  const setValue = (event: React.FormEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;
    const value = mappingFunc(element);
    updateValue(value);
    setDirty(true);

    if (validationFunc) {
      const result = validationFunc(value);
      setValid(element.validity.valid && result.valid);
      setError(result.error === "" ? element.validationMessage : result.error);
    } else {
      setValid(element.validity.valid);
      setError(element.validationMessage);
    }
  };

  const setValidationResult = (result: IValidationResult): void => {
    setValid(result.valid);
    setError(result.error);
  };

  return {
    value,
    setValue,
    valid,
    setValidationResult,
    error,
    dirty,
  };
}
