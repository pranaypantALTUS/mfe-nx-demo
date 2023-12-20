import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/dashboard',
  remotes: ['apps/contact'],
  shared: (packageName: string) => {
    // I do not want to share this package and I will load my own version
    if (packageName === 'lodash') return false;
  },
};

export default config;
