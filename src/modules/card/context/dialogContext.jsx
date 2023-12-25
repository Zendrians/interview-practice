import { createContext, useState } from "react";

export const DialogContext = createContext(false);

const DialogContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export default DialogContextProvider;
