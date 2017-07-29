const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: [
      "./background/context-menu.js",
      "./background/command.js",
      "./background/service.js"
    ],
    options: "./ui/options.js",
    popup: "./ui/popup.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].dist.js"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "common"),
      "node_modules"
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './static/', to: './' }
    ])
  ]
};
