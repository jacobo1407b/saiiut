const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const globalruta = __dirname + "/src/views/client";
const LiveReloadPlugin = require('webpack-livereload-plugin');


const config = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              path: __dirname + "/src/public/",
              name: `assets/static/[hash].[ext]`,
            },
          },
        ],
      },
    ],
  },
};

var configAlumno = Object.assign({}, config, {
  entry: `${globalruta}/alumno/alumno.jsx`,
  output: {
    filename: "chunks.alumno.min.js",
  path: __dirname + "/src/public/build",
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "css/alumno.min.css"
      }),
      new LiveReloadPlugin()
  ]
});
var configAdmin = Object.assign({}, config, {
  entry:  `${globalruta}/admin/index.jsx`,
  output: {
    filename: "chunks.admin.min.js",
  path: __dirname + "/src/public/build",
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "css/admin.min.css"
      }),
      new LiveReloadPlugin()
  ]
});

var configProfe = Object.assign({}, config, {
  entry:  `${globalruta}/profe/profe.jsx`,
  output: {
    filename: "chunks.profe.min.js",
  path: __dirname + "/src/public/build",
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "css/profe.min.css"
      }),
      new LiveReloadPlugin()
  ]
});
var notFound = Object.assign({}, config, {
  entry:  __dirname + "/src/views/client/NotFoud.jsx",
  output: {
    filename: "chunks.404.min.js",
  path: __dirname + "/src/public/build",
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "css/404.min.css"
      }),
      new LiveReloadPlugin()
  ]
});

module.exports = [configAdmin, configProfe,configAlumno,notFound];