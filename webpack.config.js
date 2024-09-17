const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // Убедитесь, что путь корректен
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Убедитесь, что HTML-шаблон правильно настроен
            filename: 'index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Указываем, откуда сервер берет статические файлы
        },
        compress: true,
        port: 9000,
        open: true, // Автоматически откроет браузер
    }
};
