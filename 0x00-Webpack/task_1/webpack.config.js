const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js', // Ensure this file exists
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.js'], // Specify the file types you want to resolve
    },
};