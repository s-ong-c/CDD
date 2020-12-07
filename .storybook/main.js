
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

async function yarn2Config(config, options) {

  /** SVG Components */
  const rules = config.module.rules;
  const fileLoaderRule = rules.find(rule => rule.test.test('.tsx'));
  fileLoaderRule.use[0].options.plugins.push([
    require.resolve('babel-plugin-named-asset-import'),
    {
      loaderMap: {
        svg: {
           ReactComponent:
            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
          },
        },
      },
    ]);
  const newConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [
        ...config.resolve.plugins || [],
        PnpWebpackPlugin
      ]
    },
    resolveLoader: {
      ...(config.resolveLoader),
      plugins: [
        ...config.resolveLoader.plugins,
        PnpWebpackPlugin.moduleLoader(module)
      ]
    }
  };

  return newConfig;
}

module.exports = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  managerWebpack: yarn2Config, webpack: yarn2Config
}