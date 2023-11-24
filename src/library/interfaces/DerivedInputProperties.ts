import { IUseInput } from "..";

export interface DerivedInputProperties<TInputType> {
  errorClass: string;
  inputClass: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  successClass: string;
  useInput: IUseInput<TInputType>;
}
