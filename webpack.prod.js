const webpack = require("webpack");
process.env.NODE_PATH = process.env.NODE_PATH || "";

module.exports = {
  mode: "development",
  devtool: "source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
  ],
};
