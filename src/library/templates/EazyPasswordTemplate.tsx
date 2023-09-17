import { useId } from "react";
import {
  EazyLabel,
  EazyPasswordInput,
  EazyValidationMessage,
  IUseInput,
} from "..";

export const EazyPasswordTemplate: React.FC<EazyPasswordTemplateProperties> = ({
  labelText,
  placeholder,
  useInput,
}) => {
  const id = useId();

  return (
    <div>
      <div>
        <EazyLabel id={id} text={labelText} />
      </div>
      <div>
        <EazyPasswordInput
          id={id}
          placeholder={placeholder}
          useInput={useInput}
        />
      </div>
      <EazyValidationMessage useInput={useInput} />
    </div>
  );
};

interface EazyPasswordTemplateProperties {
  labelText: string;
  placeholder: string;
  useInput: IUseInput<string>;
}
