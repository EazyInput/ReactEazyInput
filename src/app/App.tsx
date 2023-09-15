import { useTextInput } from "../library";
import { BaseEazyInput } from "../library/base/BaseEazyInput";

const App: React.FC = () => {
  const firstName = useTextInput("mike");

  return <BaseEazyInput type="text" useInput={firstName} />;
};

export default App;
