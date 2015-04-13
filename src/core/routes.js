var debug = require('debug')('route');

module.exports = function(app) {

    debug('Loading routes ...');

    app.all('*', function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

        // next();
    });

    app.get('/*', function(req, res) {

        debug('GET /* : Hello');
        res.send('UN SUPER MESSAGE');

    });

}