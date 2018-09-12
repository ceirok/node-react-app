const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
const options = {
	// socketTimeoutMS: 30000,
	keepAlive: true,
	// reconnectTries: 30000,
	useNewUrlParser: true
};

mongoose.connect("mongodb://localhost/warbler", options);

module.exports.User = require('./user');
module.exports.Message = require('./message');