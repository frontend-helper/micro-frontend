const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 1000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        user: "user@http://localhost:1001/remoteEntry.js",
        admin: "admin@http://localhost:1002/remoteEntry.js",
      },
    }),
  ],
};
