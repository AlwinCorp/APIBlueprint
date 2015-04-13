// Bootstrap
var debug = require('debug')('app');
var packageJson = require('../package.json');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

debug('===== %s (%s) =====', packageJson.name, packageJson.version);    

var server = app.listen(app.get('port'), function() {
    debug('ApiBlueprint server running on port ' + server.address().port);
});