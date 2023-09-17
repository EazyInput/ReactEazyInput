import { IUseInput, InputType, determineStyleClass, getValue } from "..";

export const EazyBaseInput: React.FC<BaseEazyInputProperties> = ({
  errorClass,
  inputStaticClass,
  id,
  placeholder,
  required,
  successClass,
  type,
  useInput,
}) => {
  return (
    <input
      className={determineStyleClass(
        useInput,
        inputStaticClass,
        errorClass,
        successClass,
      )}
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
  errorClass?: string;
  inputStaticClass?: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  successClass?: string;
  type: string;
  useInput: IUseInput<InputType>;
}
