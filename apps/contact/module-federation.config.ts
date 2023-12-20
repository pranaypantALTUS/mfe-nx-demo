import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/contact',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (packageName: string) => {
    console.log(process.env.NODE_ENV);
    // I do not want to share this package and I will load my own version
    if (packageName === 'lodash') return false;
  },
};

export default config;
