import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

function getTailwindConfig() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return resolveConfig(tailwindConfig);
}

export { getTailwindConfig };
