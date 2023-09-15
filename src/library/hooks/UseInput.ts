import { useState } from "react";
import { IUseInput, InputType } from "..";

export function useInput<TInputType extends InputType>(
  initial: TInputType,
  mappingFunc: (element: HTMLInputElement) => TInputType
): IUseInput<TInputType> {
  const [value, updateValue] = useState<TInputType>(initial);
  const [valid, setValid] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [dirty, setDirty] = useState<boolean>(false);

  const setValue = (event: React.FormEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;
    updateValue(mappingFunc(element));
    setValid(element.validity.valid);
    setError(element.validationMessage);
    setDirty(true);
  };

  return {
    value,
    setValue,
    valid,
    error,
    dirty,
  };
}
