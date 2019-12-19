const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
    const envPath = env.NODE_ENV ? `.env.${env.ENVIRONMENT}` : '.env';

    const config = {
        plugins: [
            new Dotenv({
                path: envPath
            })
        ]
    };

    return config;
};