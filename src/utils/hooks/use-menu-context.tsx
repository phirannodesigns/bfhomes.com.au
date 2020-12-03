import * as React from "react";

import { MenuContext } from "../../components/menu-context";

function useMenuContext() {
  const context = React.useContext(MenuContext);
  return context;
}

export { useMenuContext };
