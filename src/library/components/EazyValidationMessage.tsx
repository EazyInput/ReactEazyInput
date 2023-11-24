import { IUseInput, InputType, determineStyleClass } from "..";

export const EazyValidationMessage: React.FC<
  EazyValidationMessageProperties
> = ({ errorClass, validationMessageClass, successClass, useInput }) => {
  return (
    <p
      className={determineStyleClass(
        useInput,
        validationMessageClass,
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
  validationMessageClass?: string;
  successClass?: string;
  useInput: IUseInput<InputType>;
}
