"use strict";
/**
 * Created by XD on 2016/7/12.
 */
var Platform;
(function (Platform) {
    Platform.open = "demo";
})(Platform = exports.Platform || (exports.Platform = {}));
exports.compilePath = './client/' + Platform.open + "/index";
exports.serverProtocol = "http";
exports.serverHost = "192.168.0.110";
exports.serverPort = 3006;
exports.serverUri = exports.serverProtocol + "://" + exports.serverHost + ":" + exports.serverPort;
exports.hotReloadServerProtocol = 'http';
exports.hotReloadServerHost = '192.168.0.110';
exports.hotReloadServerPort = 3007;
exports.hotReloadServerUri = exports.hotReloadServerProtocol + "://" + exports.hotReloadServerHost + ":" + exports.hotReloadServerPort;
