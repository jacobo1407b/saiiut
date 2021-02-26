const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const globalruta = __dirname + "/src/views/client";

const config =  {
    mode:"production",
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
      })
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
      })
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
      })
  ]
});
var notFound = Object.assign({}, config, {
  entry:  `${globalruta}/NotFoud.jsx`,
  output: {
    filename: "chunks.404.min.js",
  path: __dirname + "/src/public/build",
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "css/404.min.css"
      }),
  ]
});

module.exports = [configAdmin, configProfe,configAlumno,notFound];