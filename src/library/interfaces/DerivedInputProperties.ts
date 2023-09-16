import { IUseInput } from "..";

export interface DerivedInputProperties<TInputType> {
  id: string;
  placeholder?: string;
  required?: boolean;
  useInput: IUseInput<TInputType>;
}
