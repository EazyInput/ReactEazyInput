import { useId } from "react";
import { EazyLabel, EazyTextInput, EazyValidationMessage, IUseInput } from "..";

export const EazyTextTemplate: React.FC<EazyTextProperties> = ({
  labelText,
  useInput,
}) => {
  const id = useId();

  return (
    <div>
      <div>
        <EazyLabel id={id} text={labelText} />
      </div>
      <div>
        <EazyTextInput id={id} useInput={useInput} />
      </div>
      <EazyValidationMessage useInput={useInput} />
    </div>
  );
};

interface EazyTextProperties {
  labelText: string;
  useInput: IUseInput<string>;
}
