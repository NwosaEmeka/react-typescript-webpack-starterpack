const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
process.env.NODE_PATH = process.env.NODE_PATH || "";

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"development"',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
