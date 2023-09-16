import { DerivedInputProperties, EazyBaseInput } from "..";

export const EazyPasswordInput: React.FC<EazyPasswordInputProperties> = ({
  id,
  placeholder,
  required = true,
  showPassword = false,
  useInput,
}) => {
  return (
    <EazyBaseInput
      id={id}
      placeholder={placeholder}
      required={required}
      type={showPassword ? "text" : "password"}
      useInput={useInput}
    />
  );
};

interface EazyPasswordInputProperties extends DerivedInputProperties<string> {
  showPassword?: boolean;
}
