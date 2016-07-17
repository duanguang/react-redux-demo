import * as express from 'express';
import * as path from 'path';

const baseDir = path.resolve('.');

/* node路由，允许访问的路径*/
export const staticConfig = (app)=> {
    app.use("/common", express.static(baseDir + '/client/common/'));
    app.use("/client", express.static(baseDir + '/client'));
    app.use("/static", express.static(baseDir + '/static'));
    app.use("/favicon.ico", express.static(baseDir + '/favicon.ico'));
};