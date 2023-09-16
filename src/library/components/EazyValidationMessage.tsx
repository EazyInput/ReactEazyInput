import { IUseInput, InputType } from "..";

export const EazyValidationMessage: React.FC<
  EazyValidationMessageProperties
> = ({ useInput }) => {
  return (
    <p
      style={{
        visibility: useInput.valid || !useInput.dirty ? "hidden" : "visible",
      }}
    >
      {useInput.valid || !useInput.dirty ? "valid" : useInput.error}
    </p>
  );
};

interface EazyValidationMessageProperties {
  useInput: IUseInput<InputType>;
}
