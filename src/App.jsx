import "./App.css";
import CardModuleContainer from "./modules/card/container/CardModuleContainer";
import CapColorProvider from "./modules/card/context/capColorContext";

function App() {
  return (
    <CapColorProvider>
      <CardModuleContainer />
    </CapColorProvider>
  );
}

export default App;
