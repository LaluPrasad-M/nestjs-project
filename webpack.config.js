import { composePlugins, withNx } from '@nrwl/webpack';
import path from 'path';

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  config.output.devtoolModuleFilenameTemplate = (info) => {
    const rel = path.relative(process.cwd(), info.absoluteResourcePath);
    return `webpack:///./${rel}`;
  };
  return config;
});
