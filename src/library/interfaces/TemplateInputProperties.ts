import { IUseInput } from "..";
import { StyleProperties } from "./StyleProperties";

export interface TemplateInputProperties<TInputType> extends StyleProperties {
  labelText: string;
  placeholder?: string;
  required?: boolean;
  useInput: IUseInput<TInputType>;
}
