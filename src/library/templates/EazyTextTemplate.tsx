import { useId } from "react";
import { EazyTextInput, TemplateInputProperties } from "..";
import { EazyTemplate } from "./EazyTemplate";

export const EazyTextTemplate: React.FC<EazyTextProperties> = ({
  errorClass,
  innerWrapperClass,
  inputClass,
  labelClass,
  labelText,
  outerWrapperClass,
  required,
  successClass,
  validationMessageClass,
  placeholder,
  useInput,
}) => {
  const id = useId();

  return (
    <EazyTemplate
      errorClass={errorClass}
      id={id}
      innerWrapperClass={innerWrapperClass}
      labelClass={labelClass}
      labelText={labelText}
      outerWrapperClass={outerWrapperClass}
      successClass={successClass}
      useInput={useInput}
      validationMessageClass={validationMessageClass}
    >
      <EazyTextInput
        errorClass={errorClass}
        id={id}
        inputClass={inputClass}
        placeholder={placeholder}
        required={required}
        successClass={successClass}
        useInput={useInput}
      />
    </EazyTemplate>
  );
};

type EazyTextProperties = TemplateInputProperties<string>;
