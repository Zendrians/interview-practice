import { createContext, useState } from "react";
import { CAP_BLUE } from "../constants/cardConstants";

export const CapColorContext = createContext(CAP_BLUE);

const CapColorProvider = ({ children }) => {
  const [capColor, setCapColor] = useState(CAP_BLUE);

  return (
    <CapColorContext.Provider value={{ capColor, setCapColor }}>
      {children}
    </CapColorContext.Provider>
  );
};

export default CapColorProvider;
