const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      { test: /\.css$/, use: "css-loader" }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

module.exports = config;
