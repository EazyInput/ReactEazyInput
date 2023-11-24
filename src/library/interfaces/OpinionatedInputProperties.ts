import { IUseInput } from "./IUseInput";
import { StyleProperties } from "./StyleProperties";

export interface OpinionatedInputProperties<T> extends StyleProperties {
  labelText?: string;
  placeholder?: string;
  required?: boolean;
  useInput: IUseInput<T>;
}
