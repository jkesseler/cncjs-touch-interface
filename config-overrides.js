// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    ['@babel/plugin-proposal-export-default-from'],
    ['module-resolver', {
      alias: {
        '@assets': './src/assets',
        '@ui': './src/app/components',
        '@pages': './src/app/pages',
        '@utils': './src/utils',
        '@state': './src/app/state',
      },
    }],
  ),
);
