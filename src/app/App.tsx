import {
  EazyBulmaUsername,
  EazyPasswordTemplate,
  EazySubmitButton,
  EazyTextTemplate,
  useMatchingPasswords,
  useTextInput,
} from "../library";

const App: React.FC = () => {
  const username = useTextInput();
  const [first, second] = useMatchingPasswords();

  return (
    <form>
      <EazyBulmaUsername useInput={username} />
      {/* <EazyPasswordTemplate useInput={first} />
      <EazyPasswordTemplate useInput={second} /> */}
      <EazySubmitButton inputs={[username, first, second]} />
    </form>
  );
};

export default App;
