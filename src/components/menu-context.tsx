import * as React from "react";

export const MenuContext = React.createContext({
  isOpen: false,
  setIsOpen: (value: boolean) => {},
});

function MenuContextProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContextProvider };
