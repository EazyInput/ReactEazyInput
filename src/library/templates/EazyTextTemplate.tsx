import { useId } from "react";
import {
  EazyLabel,
  EazyTextInput,
  EazyValidationMessage,
  TemplateInputProperties,
} from "..";

export const EazyTextTemplate: React.FC<EazyTextProperties> = ({
  componentWrapperClass,
  errorClass,
  inputClass,
  inputWrapperClass,
  labelClass,
  labelText,
  messageClass,
  placeholder,
  required,
  successClass,
  useInput,
}) => {
  const id = useId();

  return (
    <div className={componentWrapperClass}>
      <div>
        <EazyLabel className={labelClass} id={id} text={labelText} />
      </div>
      <div className={inputWrapperClass}>
        <EazyTextInput
          errorClass={errorClass}
          id={id}
          inputClass={inputClass}
          placeholder={placeholder}
          required={required}
          successClass={successClass}
          useInput={useInput}
        />
      </div>
      <EazyValidationMessage
        errorClass={errorClass}
        messageClass={messageClass}
        successClass={successClass}
        useInput={useInput}
      />
    </div>
  );
};

type EazyTextProperties = TemplateInputProperties<string>;
