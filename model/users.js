const mongoose = require('../config/databases');


var userSchema = new mongoose.Schema({	
	username:{
		type:String,
		unique:true,
		required:true
	},
	email:{
		type:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	firstname:{
		type:String,
	},
	lastname:{
		type:String,
	}
});

module.exports = mongoose.model('Users',userSchema);