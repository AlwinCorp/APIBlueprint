var debug = require('debug')('kernel');
var coreRouter = require('./core/routes');

module.exports = function(app) {

    // Loading the CORE routes
    debug('Loading the CORE routes');
    app.use('/', coreRouter);

}