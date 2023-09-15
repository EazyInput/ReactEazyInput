export interface IUseInput<T> {
  value: T;
  updateValue: (element: HTMLInputElement) => void;
  valid: boolean;
}
