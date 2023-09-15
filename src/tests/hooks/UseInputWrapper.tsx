import { useTextInput } from "../../library";

export const UseInputWrapper: React.FC = () => {
  const useInput = useTextInput();

  return (
    <>
      <label>
        myInput
        <input value={useInput.value} onInput={useInput.setValue} />
      </label>
    </>
  );
};
