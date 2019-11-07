/*jshint esversion: 6 */
const mongoose = require('../config/databases');


var clientSchema = new mongoose.Schema({	
	clientId: {
		type: String 
	},
	clientSecret: {
		type: String 
	},
	redirectUris:{
		type: Array 
	},
	grants:{
		type: Array 
	}
});

module.exports = mongoose.model('Clients',clientSchema);