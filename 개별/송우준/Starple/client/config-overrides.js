const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  webpack: function (config, env) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        IScroll: "iscroll",
      })
    );
    // config.plugins.push(
    //   new HtmlWebpackPlugin({
    //     template: "./src/components/Common/StarWarp/index.html",
    //   })
    // );
    return config;
  },
};
