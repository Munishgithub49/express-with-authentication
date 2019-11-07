/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
var usersController = require('../controller/users')
var authController = require('../controller/auth')

// middleware that is specific to this router to check Authentication
router.use(authController.isAuthenticate)

//Get All users
router.get('/',(req,res) => {
	let  response = usersController.getUsers();
	res.send(response.response);
});

//Create New Users
router.post('/', (req, res) => {
	let response = usersController.addUser(req.body);
	if(response.status){
		res.status(400).send(response.response);
	}else{
		res.send(response.response);
	}	
});
//Update given user id
router.put('/:id', (req, res) => {
  	let response = usersController.updateUser(req.params,req.body);
	if(response.status){
		res.status(400).send(response.response);
	}else{
		res.send(response.response);
	}	
});
//Delete Given User id
router.delete('/:id', (req, res) => {
	let response = usersController.deleteUser(req.params);
	if(response.status){
		res.status(400).send(response.response);
	}else{
		res.send(response.response);
	}
});


//Get User data against User id
router.get('/:id', function (req, res) {
	let response = usersController.getUser(req.params);
	if(response.status){
		res.status(400).send(response.response);
	}else{
		res.send(response.response);
	}
});

module.exports = router;	