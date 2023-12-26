import CardModuleContainer from "./modules/card/container/CardModuleContainer";
import CapColorProvider from "./modules/card/context/capColorContext";
import DialogContextProvider from "./modules/card/context/dialogContext";

function App() {
  return (
    <CapColorProvider>
      <DialogContextProvider>
        <CardModuleContainer />
      </DialogContextProvider>
    </CapColorProvider>
  );
}

export default App;
