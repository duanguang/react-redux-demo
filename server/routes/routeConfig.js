"use strict";
exports.routeConfig = function (app) {
    app.get('/image-proxy', require('./image-proxy'));
    app.get('*', require('./index'));
};
