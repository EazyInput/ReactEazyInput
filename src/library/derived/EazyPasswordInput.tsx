import { DerivedInputProperties, EazyBaseInput } from "..";

export const EazyPasswordInput: React.FC<EazyPasswordInputProperties> = ({
  id,
  inputClass,
  errorClass,
  successClass,
  placeholder,
  required = true,
  showPassword = false,
  useInput,
}) => {
  return (
    <EazyBaseInput
      id={id}
      errorClass={errorClass}
      successClass={successClass}
      placeholder={placeholder}
      required={required}
      inputStaticClass={inputClass}
      type={showPassword ? "text" : "password"}
      useInput={useInput}
    />
  );
};

interface EazyPasswordInputProperties extends DerivedInputProperties<string> {
  showPassword?: boolean;
}
