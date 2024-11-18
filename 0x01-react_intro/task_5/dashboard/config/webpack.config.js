const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set to 'development' or 'production'
  entry: './src/index.js', // Entry point for your JavaScript code
  output: {
    filename: 'bundle.js', // Output bundled file name
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true, // Enable hot reloading
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle both .js and .jsx files
        exclude: /node_modules/, // Don't process node_modules
        use: {
          loader: 'babel-loader', // Use Babel to process the files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i, // Handle image files
        use: ['image-webpack-loader', 'file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow imports without specifying the extension
  },
  devtool: 'inline-source-map', // For easier debugging
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // Template for the HTML file
    }),
  ],
};
