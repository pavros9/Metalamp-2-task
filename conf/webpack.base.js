const path = require("path");

module.exports = {
  entry: {
    main: ["./src/entry.js", "./src/common-blocks/new/new.js"],
    hot: "webpack/hot/dev-server.js",
    // Dev server client for web socket transport, hot and live reload logic
    client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
};