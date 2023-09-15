export interface IUseInput<TInputType> {
  value: TInputType;
  setValue: (event: React.FormEvent<HTMLInputElement>) => void;
  valid: boolean;
  error: string;
  dirty: boolean;
}
