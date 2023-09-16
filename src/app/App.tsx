import { useId } from "react";
import {
  EazyLabel,
  EazyPasswordInput,
  EazySubmitButton,
  EazyTextInput,
  useTextInput,
} from "../library";

const App: React.FC = () => {
  const usernameId = useId();
  const username = useTextInput();
  const passwordId = useId();
  const password = useTextInput();

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
      <EazySubmitButton inputs={[username, password]} />
    </form>
  );
};

export default App;
