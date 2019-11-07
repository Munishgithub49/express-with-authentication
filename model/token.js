/*jshint esversion: 6 */
const mongoose = require('../config/databases');


var tokenSchema = new mongoose.Schema({	
	accessToken:{
		type:String,
		required:true
	},
	accessTokenExpiresAt:{
		type:Date
	},
	client:{
		type:Object
	},
	clientId: { 
		type: String 
	},
	refreshToken: {
		type: String 
	},
  	refreshTokenExpiresAt: { 
  		type: Date 
  	},
  	user : { 
  		type: Object 
  	},
  	userId: { 
  		type: String 
  	}
});

module.exports = mongoose.model('Token',tokenSchema);