import { EazyPasswordTemplate, IUseInput } from "../library";

export const BulmaPassword: React.FC<BulmaPasswordProperties> = ({
  useInput,
}) => {
  return (
    <EazyPasswordTemplate
      labelText="Password"
      errorClass="is-danger"
      innerWrapperClass="control"
      outerWrapperClass="field"
      inputClass="input"
      labelClass="label"
      successClass="is-success"
      validationMessageClass="help"
      useInput={useInput}
    />
  );
};

interface BulmaPasswordProperties {
  useInput: IUseInput<string>;
}
