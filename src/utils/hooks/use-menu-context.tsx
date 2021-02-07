import * as React from 'react';

import { MenuContext } from '../../components/menu-context';

function useMenuContext() {
  return React.useContext(MenuContext);
}

export { useMenuContext };
