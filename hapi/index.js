'use strict';

const Hapi = require('@hapi/hapi');
const path = require('path');
const Blipp = require('blipp');
const routes = require(path.join(__dirname, 'routes')).routes;

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
                credentials: true,
                exposedHeaders: ['TokenCS', 'CpfCnpj', 'ibbv-login', 'WWW-Authenticate', 'Server-Authorization', 'time-box', 'Date', 'ibbv-login', 'ibbvuid'],
                additionalHeaders: [
                    'X-Requested-With',
                    'X-DNT',
                    'If-Modified-Since',
                    'hst-token',
                    'token',
                    'TokenCS',
                    'CpfCnpj',
                    'CPF',
                    'WWW-Authenticate',
                    'Server-Authorization',
                    'ibbvuid',
                    'sessionid',
                    'visitor-profile',
                    'time-box',
                    'Access-Control-Expose-Headers: ibbvuid'
                ]
            }
        },
    });

    server.route(routes);

    const start = async function () {
        try {
            await server.register({ plugin: Blipp, options: '' });
            await server.start();
            console.log('Server running on %s', server.info.uri);
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
    };

    start();
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();