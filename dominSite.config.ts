/**
 * Created by XD on 2016/7/12.
 */
export module Platform{
    export var open="demo";
}
export const compilePath='./client/'+Platform.open+"/index";
export const serverProtocol="http";
export const serverHost="192.168.0.110";
export const serverPort=3006;
export const serverUri=serverProtocol+"://"+serverHost+":"+serverPort;

export const hotReloadServerProtocol = 'http';
export const hotReloadServerHost = '192.168.0.110';
export const hotReloadServerPort = 3007;
export const hotReloadServerUri = hotReloadServerProtocol + "://" + hotReloadServerHost + ":" + hotReloadServerPort;