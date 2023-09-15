import { IUseInput, InputType, getValue } from "..";

export const BaseEazyInput: React.FC<BaseEazyInputProperties> = ({
  type,
  useInput,
}) => {
  return <input value={getValue(type, useInput)} />;
};

interface BaseEazyInputProperties {
  type: string;
  useInput: IUseInput<InputType>;
}
