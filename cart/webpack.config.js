const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartIndex': './src/bootstrap',
      },
      shared: {
        faker: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
