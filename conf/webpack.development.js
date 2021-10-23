const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BaseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");
const fs = require("fs");
const pages = [];

fs.readdirSync(path.resolve(__dirname, "..", "src", "pages"))
  .filter((file) => {
    return file.indexOf("base") !== 0;
  })
  .forEach((file) => {
    pages.push(file.split("/", 2));
  });

const filename = (ext) => `[name].${ext}`;
const htmlPlugins = pages.map(
  (fileName) =>
    new HTMLWebpackPlugin({
      getData: () => {
        try {
          return JSON.parse(fs.readFileSync(`./src/pages/${fileName}/data.json`, "utf8"));
        } catch (e) {
          console.warn(`data.json was not provided for page ${fileName}`);
          return {};
        }
      },
      filename: `pages/${fileName}/${fileName}.html`,
      template: `./src/pages/${fileName}/${fileName}.pug`,
      alwaysWriteToDisk: true,
      inject: "body",
      hash: true,
      minify: false,
    })
);

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
    open: {
      // target: pages.map((fileName) => `pages/${fileName}/${fileName}.html`),
      target: "pages/second-page/second-page.html",
    },
  },
  plugins: [
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
  ].concat(htmlPlugins),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders({
          loader: "resolve-url-loader",
          // options: {
          //   root: path.join(__dirname, "src"),
          // },
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
        test: /\.(ttf|woff|woff2|eot|font.*\.svg$)$/,
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
        use: ["pug-loader?pretty=true"],
      },
    ],
  },
});
