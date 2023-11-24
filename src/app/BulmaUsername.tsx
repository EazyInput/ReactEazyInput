import { EazyUsername, IUseInput } from "../library";

export const BulmaUsername: React.FC<BulmaUsernameProperties> = ({
  useInput,
}) => {
  return (
    <EazyUsername
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

interface BulmaUsernameProperties {
  useInput: IUseInput<string>;
}
