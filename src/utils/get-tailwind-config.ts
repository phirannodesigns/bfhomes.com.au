/* eslint-disable @typescript-eslint/no-unsafe-return, import/no-extraneous-dependencies */
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

function getTailwindConfig() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return resolveConfig(tailwindConfig);
}

export { getTailwindConfig };
