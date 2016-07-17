export const routeConfig = (app)=> {
    app.get('/image-proxy', require('./image-proxy'));
    app.get('*', require('./index'));
};