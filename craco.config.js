const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.plugins.push(
                new CopyWebpackPlugin({
                    patterns: [
                        {
                            from: 'public/pdfs',
                            to: 'pdfs'
                        }
                    ]
                })
            );
            return webpackConfig;
        }
    }
}; 