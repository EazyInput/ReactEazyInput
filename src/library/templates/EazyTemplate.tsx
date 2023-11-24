import { ReactNode } from "react";
import { EazyLabel, EazyValidationMessage, IUseInput, InputType } from "..";
import { TemplateProperties } from "./TemplateProperties";

export const EazyTemplate: React.FC<EazyTemplateProperties> = ({
  errorClass,
  id,
  innerWrapperClass,
  labelClass,
  labelText,
  outerWrapperClass,
  successClass,
  useInput,
  validationMessageClass,
  children,
}) => {
  return (
    <div className={outerWrapperClass}>
      <div>
        <EazyLabel labelClass={labelClass} id={id} text={labelText} />
      </div>
      <div className={innerWrapperClass}>{children}</div>
      <EazyValidationMessage
        errorClass={errorClass}
        successClass={successClass}
        useInput={useInput}
        validationMessageClass={validationMessageClass}
      />
    </div>
  );
};

interface EazyTemplateProperties extends TemplateProperties {
  children: ReactNode;
  id: string;
  useInput: IUseInput<InputType>;
}
