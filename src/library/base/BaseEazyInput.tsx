import { IUseInput, InputType, getValue } from "..";

export const BaseEazyInput: React.FC<BaseEazyInputProperties> = ({
  type,
  useInput,
}) => {
  return (
    <input
      onChange={useInput.setValue}
      onFocus={useInput.setValue}
      onInput={useInput.setValue}
      type={type}
      value={getValue(type, useInput)}
    />
  );
};

interface BaseEazyInputProperties {
  type: string;
  useInput: IUseInput<InputType>;
}
