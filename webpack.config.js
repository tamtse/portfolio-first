const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.html$/, use: ["html-loader"] },
      { test: /\.s?css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(png|jpg|gif|)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        loader: "file-loader",
        options: {
          outputPath: "fonts",
        },
      },
      {
        test: /\.jpg/,
        type: "asset/inline",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "ToDo List App",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
