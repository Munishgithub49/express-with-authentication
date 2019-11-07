/*jshint esversion: 6 */
const express = require('express');
const authController = require('../controller/auth')
const router = express.Router();


//url to check weather host is runing or not
router.post('/', function (req, res,next) {
	//console.log(req.body);
	authController.generateToken(req,res,next);
	//console.log(token)
	//res.send('Domain Is Working');
	//next()
	//res.send("sdfsdfg")
});

module.exports = router;