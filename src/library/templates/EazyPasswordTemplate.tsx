import { useId } from "react";
import { EazyPasswordInput, TemplateInputProperties } from "..";
import { EazyTemplate } from "./EazyTemplate";

export const EazyPasswordTemplate: React.FC<EazyPasswordTemplateProperties> = ({
  errorClass,
  innerWrapperClass,
  inputClass,
  labelClass,
  labelText,
  outerWrapperClass,
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
      <EazyPasswordInput
        errorClass={errorClass}
        successClass={successClass}
        id={id}
        placeholder={placeholder}
        inputClass={inputClass}
        useInput={useInput}
      />
    </EazyTemplate>
  );
};

type EazyPasswordTemplateProperties = TemplateInputProperties<string>;
