const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  };

  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

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

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: ["./index.js", "./common-blocks/new/new.js"],
    hot: "webpack/hot/dev-server.js",
    // Dev server client for web socket transport, hot and live reload logic
    client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  optimization: optimization(),
  devtool: isDev ? "source-map" : false,
  devServer: {
    port: 4200,
    hot: false,
    client: false,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "pages/first-page.pug",
      filename: "index.pug".replace(".pug", ".html"),
    }),

    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist/assets"),
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
        use: cssLoaders(),
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
};
