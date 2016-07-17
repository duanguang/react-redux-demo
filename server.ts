/**
 * Created by DuanG on 2016/7/15.
 */
import * as express from 'express';
import {serverHost, serverPort, serverUri} from './dominSite.config';
import {staticConfig} from './server/configs/staticConfig';
import {whmConfig} from './server/configs/whmConfig';
import {bundlerConfig} from './server/configs/bundlerConfig';
import {routeConfig} from './server/routes/routeConfig';

let app = express();

whmConfig(app);
staticConfig(app);
bundlerConfig(app);
routeConfig(app);

app.listen(serverPort, serverHost, function (err:string):void {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at ' + serverUri);
});