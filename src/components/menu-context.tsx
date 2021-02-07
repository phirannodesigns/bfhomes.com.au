import * as React from 'react';

interface IMenuContext {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}

const MenuContext = React.createContext<IMenuContext>({
  isOpen: false,
  setIsOpen: () => null,
});

function MenuContextProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuContextProvider };
