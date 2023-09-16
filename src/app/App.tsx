import { useId } from "react";
import {
  EazyLabel,
  EazyPasswordInput,
  EazySubmitButton,
  EazyTextTemplate,
  EazyValidationMessage,
  useMatchingPasswords,
  useTextInput,
} from "../library";

const App: React.FC = () => {
  const username = useTextInput();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const [first, second] = useMatchingPasswords();

  return (
    <form>
      <EazyTextTemplate useInput={username} labelText="Username:" />
      <div>
        <EazyLabel id={passwordId} text="Password:" />
        <div>
          <EazyPasswordInput id={passwordId} useInput={first} />
        </div>
      </div>
      <div>
        <EazyLabel id={confirmPasswordId} text="Confirm Password:" />
        <div>
          <EazyPasswordInput id={confirmPasswordId} useInput={second} />
        </div>
        <EazyValidationMessage useInput={second} />
      </div>
      <EazySubmitButton inputs={[username, first, second]} />
    </form>
  );
};

export default App;
