import { IUseInput, InputType, getValue } from "..";

export const EazyBaseInput: React.FC<BaseEazyInputProperties> = ({
  id,
  placeholder,
  required,
  type,
  useInput,
}) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      onChange={useInput.setValue}
      onFocus={useInput.setValue}
      onInput={useInput.setValue}
      required={required}
      type={type}
      value={getValue(type, useInput)}
    />
  );
};

interface BaseEazyInputProperties {
  id: string;
  placeholder?: string;
  required?: boolean;
  type: string;
  useInput: IUseInput<InputType>;
}
