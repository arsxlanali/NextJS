module.exports = {
  // Other webpack configuration properties
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: require.resolve("file-loader"),
              name: "[name].[hash:8].[ext]",
              outputPath: "fonts/",
              publicPath: "../fonts/",
            },
          },
        ],
      },
    ],
  },
};
