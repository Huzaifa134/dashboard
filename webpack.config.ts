const path = require("path");

const config = {
  mode: "production",
  entry: "./src/index.js", // Specify your entry file
  output: {
    path: path.resolve(__dirname, "dist"), // Specify the output directory
    filename: "bundle.js", // Specify the output file
  },
  resolve: {
    extensions: [".mjs", ".tsx", ".json", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // Add more rules as needed
    ],
  },
};

module.exports = config;
