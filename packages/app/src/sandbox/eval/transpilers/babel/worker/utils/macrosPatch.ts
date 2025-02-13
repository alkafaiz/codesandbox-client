import * as macrosPlugin from 'babel-plugin-macros';
import { resolve } from './resolve';

// eslint-disable-next-line
let finalExports = function m(babel, options) {
  return macrosPlugin(babel, {
    ...options,
    resolvePath(source, basePath) {
      return resolve(source, {
        filename: basePath + '/index',
      });
    },
  });
};

finalExports = Object.assign(finalExports, {
  createMacro: macrosPlugin.createMacro,
  MacroError: macrosPlugin.MacroError,
});

export default finalExports;
