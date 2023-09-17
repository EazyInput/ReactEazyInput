import { IUseInput } from "..";

export interface TemplateInputProperties<TInputType> {
  componentWrapperClass?: string;
  errorClass?: string;
  inputClass?: string;
  inputWrapperClass?: string;
  labelClass?: string;
  labelText: string;
  messageClass?: string;
  placeholder?: string;
  required?: boolean;
  successClass?: string;
  useInput: IUseInput<TInputType>;
}
