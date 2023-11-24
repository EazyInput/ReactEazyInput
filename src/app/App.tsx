import {
  EazySubmitButton,
  useMatchingPasswords,
  useTextInput,
} from "../library";
import { BulmaPassword } from "./BulmaPassword";
import { BulmaUsername } from "./BulmaUsername";

const App: React.FC = () => {
  const username = useTextInput();
  const [first, second] = useMatchingPasswords();

  return (
    <form>
      <BulmaUsername useInput={username} />
      <BulmaPassword useInput={first} />
      <BulmaPassword useInput={second} />
      <EazySubmitButton inputs={[username, first, second]} />
    </form>
  );
};

export default App;
