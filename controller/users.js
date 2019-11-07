/*jshint esversion: 6 */
const Joi = require('joi');

//Constant Data to make api's working
const users = [
  { id: 1, name: 'Ram' },  
  { id: 2, name: 'Syam' },  
  { id: 3, name: 'Rampal' },  
];

//Function to get all users details
module.exports.getUsers = function(){

	return {"status":true,"response":users}
}
//Function to create new user
module.exports.addUser = function(requestParams){

	const { error } = validateUsers(requestParams); 
  	if (error) return {"status":false,"response":error.details[0].message}
	const user = {
	    id: users.length + 1,
	    name: requestParams.name
	};
	users.push(user);
	return {"status":true,"response":user}
}

//Function to update users details
module.exports.updateUser = function(requestParams,requestBody){
	let result = users.find(c =>c.id === parseInt(requestParams.id)) 
	if (!result) return {"status":false,"response":`The user with the given ID ${requestParams.id} was not found.`}

	const { error } = validateUsers(requestBody); 
	if (error) return {"status":false,"response":error.details[0].message}

	result.name = requestBody.name; 
	return {"status":true,"response":result}
}

//Function to DELETE specific user details
module.exports.deleteUser = function(requestParams){
	let result = users.find(c =>c.id === parseInt(requestParams.id)) 
	if (!result) return {"status":false,"response":`The user with the given ID ${requestParams.id} was not found.`}
	const index = users.indexOf(result);
	users.splice(index, 1);
	return {"status":true,"response":result}
}

//Function to get specific users details
module.exports.getUser = function(requestParams){
	let result = users.find(c =>c.id === parseInt(requestParams.id)) 
	if (!result) return {"status":false,"response":`The user with the given ID ${requestParams.id} was not found.`}
	return {"status":true,"response":result}
}

//Function to validate unput using joi 
function validateUsers(user) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(user, schema);
}
