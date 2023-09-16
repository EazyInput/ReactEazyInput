import { IValid } from "..";

export interface IUseInput<TInputType> extends IValid {
  value: TInputType;
  setValue: (event: React.FormEvent<HTMLInputElement>) => void;
  error: string;
  dirty: boolean;
}
