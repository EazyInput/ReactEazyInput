import { useState } from "react";
import { IUseInput, InputType } from "..";

export function useInput<T extends InputType>(
  initial: T,
  mappingFunc: (element: HTMLInputElement) => T
): IUseInput<T> {
  const [value, setValue] = useState<T>(initial);
  const [valid, setValid] = useState<boolean>(false);

  const updateValue = (element: HTMLInputElement): void => {
    setValue(mappingFunc(element));
  };

  return {
    value,
    updateValue,
    valid,
  };
}
