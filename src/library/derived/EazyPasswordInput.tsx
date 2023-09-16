import { DerivedInputProperties, EazyBaseInput, IUseInput } from "..";

export const EazyPasswordInput: React.FC<EazyPasswordInputProperties> = ({
  id,
  placeholder,
  required = true,
  useInput,
}) => {
  return (
    <EazyBaseInput
      id={id}
      placeholder={placeholder}
      required={required}
      type="password"
      useInput={useInput}
    />
  );
};

interface EazyPasswordInputProperties extends DerivedInputProperties<string> {}
