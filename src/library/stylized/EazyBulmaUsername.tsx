import { EazyUsername, IUseInput } from "..";

export const EazyBulmaUsername: React.FC<EazyBulmaUsernameProperties> = ({
  useInput,
}) => {
  return (
    <EazyUsername
      componentWrapperClass="field"
      errorClass="is-danger"
      labelText="Username"
      labelClass="label"
      messageClass="help"
      inputClass="input"
      inputWrapperClass="control"
      successClass="is-success"
      useInput={useInput}
    />
  );
};

interface EazyBulmaUsernameProperties {
  useInput: IUseInput<string>;
}
