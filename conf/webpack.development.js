const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BaseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");

const filename = (ext) => `[name].${ext}`;

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    "css-loader",
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

module.exports = merge(BaseConfig, {
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "..", "dist"),
    // publicPath: "./",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
  devtool: "source-map",
  devServer: {
    hot: false,
    client: false,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/pages/first-page.pug",
      filename: "./index.pug".replace(".pug", ".html"),
      files: {
        css: path.resolve(__dirname, "..", "dist"),
      },
    }),

    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "..", "src/assets"),
          to: path.resolve(__dirname, "..", "dist/assets"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders({
          loader: "resolve-url-loader",
          options: {
            root: path.join(__dirname, "src"),
          },
        }),
      },
      {
        test: /\.scss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        include: [path.resolve(__dirname, "img/")],
        type: "asset/resource",
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: "asset/resource",
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
    ],
  },
});
console.log(module.exports);
