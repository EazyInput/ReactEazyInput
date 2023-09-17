import { IUseInput, InputType, determineStyleClass } from "..";

export const EazyValidationMessage: React.FC<
  EazyValidationMessageProperties
> = ({ errorClass, messageClass, successClass, useInput }) => {
  return (
    <p
      className={determineStyleClass(
        useInput,
        messageClass,
        errorClass,
        successClass,
      )}
      style={{
        visibility: useInput.valid || !useInput.dirty ? "hidden" : "visible",
      }}
    >
      {useInput.valid || !useInput.dirty ? "valid" : useInput.error}
    </p>
  );
};

interface EazyValidationMessageProperties {
  errorClass?: string;
  messageClass?: string;
  successClass?: string;
  useInput: IUseInput<InputType>;
}
