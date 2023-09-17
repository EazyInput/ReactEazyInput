import { EazyTextTemplate, TemplateInputProperties } from "..";

export const EazyUsername: React.FC<EazyUsernameProperties> = ({
  componentWrapperClass,
  errorClass,
  inputClass,
  inputWrapperClass,
  labelClass,
  labelText = "Username",
  messageClass,
  placeholder = "Username",
  required = true,
  successClass,
  useInput,
}) => {
  return (
    <EazyTextTemplate
      componentWrapperClass={componentWrapperClass}
      errorClass={errorClass}
      inputClass={inputClass}
      inputWrapperClass={inputWrapperClass}
      messageClass={messageClass}
      labelClass={labelClass}
      labelText={labelText}
      placeholder={placeholder}
      required={required}
      successClass={successClass}
      useInput={useInput}
    />
  );
};

type EazyUsernameProperties = TemplateInputProperties<string>;
