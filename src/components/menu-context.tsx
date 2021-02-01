import * as React from "react";

interface Context {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}

const MenuContext = React.createContext<Context>({
  isOpen: false,
  setIsOpen: () => null,
});

function MenuContextProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuContextProvider };
