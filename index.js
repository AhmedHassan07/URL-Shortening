/**
 * Created by Hassan on 4/22/2017.
 */
'use strict';
global.winston = require('winston');

require('./server/config/config')(function(err) {
    if(err){

        winston.info('Error configuring app '+err);
    }
    var app = require('./server/config/express');

    app.listen(config.PORT);
    winston.info('Express app started on port ' + config.PORT);

    module.exports = app;
});
