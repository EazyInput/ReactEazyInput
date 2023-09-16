import { IValid, IValidationResult } from "..";

export interface IUseInput<TInputType> extends IValid {
  value: TInputType;
  setValue: (event: React.FormEvent<HTMLInputElement>) => void;
  error: string;
  setValidationResult: (result: IValidationResult) => void;
  dirty: boolean;
}
