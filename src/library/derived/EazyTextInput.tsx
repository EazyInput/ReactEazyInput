import { DerivedInputProperties, EazyBaseInput } from "..";

export const EazyTextInput: React.FC<EazyTextInputProperties> = ({
  id,
  placeholder,
  required,
  useInput,
}) => {
  return (
    <EazyBaseInput
      id={id}
      placeholder={placeholder}
      required={required}
      type="text"
      useInput={useInput}
    />
  );
};

type EazyTextInputProperties = DerivedInputProperties<string>;
