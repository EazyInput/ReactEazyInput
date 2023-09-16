import { useId } from "react";
import {
  EazyLabel,
  EazyPasswordInput,
  EazySubmitButton,
  EazyTextInput,
  matchingPasswords,
  useTextInput,
} from "../library";

const App: React.FC = () => {
  const usernameId = useId();
  const username = useTextInput();
  const passwordId = useId();
  const password = useTextInput();
  const confirmPasswordId = useId();
  const confirmPassword = useTextInput("", (value) =>
    matchingPasswords(password.value, value),
  );

  return (
    <form>
      <div>
        <EazyLabel id={usernameId} text="Username:" />
        <div>
          <EazyTextInput id={usernameId} useInput={username} />
        </div>
      </div>
      <div>
        <EazyLabel id={passwordId} text="Password:" />
        <div>
          <EazyPasswordInput id={passwordId} useInput={password} />
        </div>
      </div>
      <div>
        <EazyLabel id={confirmPasswordId} text="Confirm Password:" />
        <div>
          <EazyPasswordInput
            id={confirmPasswordId}
            useInput={confirmPassword}
          />
        </div>
        <p>{confirmPassword.error}</p>
      </div>
      <EazySubmitButton inputs={[username, password, confirmPassword]} />
    </form>
  );
};

export default App;
