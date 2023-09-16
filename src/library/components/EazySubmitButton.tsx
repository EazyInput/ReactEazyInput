import { IValid, submitDisabled } from "..";

export const EazySubmitButton: React.FC<EazySubmitButtonProperties> = ({
  inputs,
  text = "Submit",
}) => {
  return (
    <button disabled={submitDisabled(inputs)} type="submit">
      {text}
    </button>
  );
};

interface EazySubmitButtonProperties {
  inputs: Array<IValid>;
  text?: string;
}
