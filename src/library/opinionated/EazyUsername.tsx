import { EazyTextTemplate } from "..";
import { OpinionatedInputProperties } from "../interfaces/OpinionatedInputProperties";

export const EazyUsername: React.FC<EazyUsernameProperties> = ({
  outerWrapperClass,
  errorClass,
  innerWrapperClass,
  inputClass,
  labelClass,
  labelText = "Username",
  placeholder = "Username",
  required = true,
  successClass,
  useInput,
  validationMessageClass,
}) => {
  return (
    <EazyTextTemplate
      outerWrapperClass={outerWrapperClass}
      errorClass={errorClass}
      inputClass={inputClass}
      innerWrapperClass={innerWrapperClass}
      validationMessageClass={validationMessageClass}
      labelClass={labelClass}
      labelText={labelText}
      placeholder={placeholder}
      required={required}
      successClass={successClass}
      useInput={useInput}
    />
  );
};

type EazyUsernameProperties = OpinionatedInputProperties<string>;
