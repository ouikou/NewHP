var env = process.env.NODE_ENV || 'development',
	config = require('./config/global')[env];

global.config = config;

// Create Exrepss Server
var app = require('./config/express')(config);

app.listen(8081);

module.exports = app;
