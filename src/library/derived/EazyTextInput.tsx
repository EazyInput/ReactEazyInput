import { DerivedInputProperties, EazyBaseInput } from "..";

export const EazyTextInput: React.FC<EazyTextInputProperties> = ({
  errorClass,
  inputClass,
  id,
  placeholder,
  required,
  successClass,
  useInput,
}) => {
  return (
    <EazyBaseInput
      errorClass={errorClass}
      inputStaticClass={inputClass}
      id={id}
      placeholder={placeholder}
      required={required}
      successClass={successClass}
      type="text"
      useInput={useInput}
    />
  );
};

type EazyTextInputProperties = DerivedInputProperties<string>;
