const { stat } = require('fs');
const path = require('path');
const rootPath = path.resolve(__dirname, '../../');
const src = path.resolve(__dirname, '../');

const paths = {
    directory:{
        rootPath:           rootPath,
        src:                src,
        config :            path.resolve(src, './configs/'),
        languages:          path.resolve(src, './configs/languages/'),
        customs:            path.resolve(src, './configs/languages/customs/'),
        controllers:        path.resolve(src, './controllers/'),
        services:           path.resolve(src, './services/'),
        contexts:           path.resolve(src, './contexts/'),
        routers:            path.resolve(src, './routers/'),
        static:             path.resolve(src, './static/'),
        helpers:            path.resolve(src, './helpers/'),
    },
    jsfile:{
        init:               path.resolve(src, './configs/init.js'),
        paths:              path.resolve(src, './configs/paths.js'),
        validation:         path.resolve(src, './configs/validation.js'),
        languages:          path.resolve(src, './configs/languages/topLevel.js'),
        https:              path.resolve(src, './https.js'),
        contexts:           path.resolve(src, './contexts/contexts.js'),
        controllers:        path.resolve(src, './controllers/controllers.js'),
        services:           path.resolve(src, './services/services.js'),
        routers:            path.resolve(src, './routers/routers.js'),
    },

    key: {
        sslKey:             path.resolve(src, './static/keys/ssl.key'),
        sslCrt:             path.resolve(src, './static/keys/ssl.crt'),
    },

    json:{
        basic:              path.resolve(src, './configs/jsons/basic.json'),
        database:           path.resolve(src, './configs/jsons/database.json'),
        language:           path.resolve(src, './configs/jsons/language.json'),
        network:            path.resolve(src, './configs/jsons/network.json'),
    }

};

module.exports = paths;