"use strict";
/**
 * Created by DuanG on 2016/7/15.
 */
var express = require('express');
var dominSite_config_1 = require('./dominSite.config');
var staticConfig_1 = require('./server/configs/staticConfig');
var whmConfig_1 = require('./server/configs/whmConfig');
var bundlerConfig_1 = require('./server/configs/bundlerConfig');
var routeConfig_1 = require('./server/routes/routeConfig');
var app = express();
whmConfig_1.whmConfig(app);
staticConfig_1.staticConfig(app);
bundlerConfig_1.bundlerConfig(app);
routeConfig_1.routeConfig(app);
app.listen(dominSite_config_1.serverPort, dominSite_config_1.serverHost, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at ' + dominSite_config_1.serverUri);
});
