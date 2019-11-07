/*jshint esversion: 6 */
var express = require('express');
var ExpressOAuthServer = require('express-oauth-server');
const authmodel = require('../model/auth');

module.exports.isAuthenticate = function(req,res,next){
	// expressOauth.oauth.authorize(req);
	var oauth = new ExpressOAuthServer({
		model: authmodel,
	  	useErrorHandler: false,
	    continueMiddleware: false,
	    requireClientAuthentication: {password: false}
	});
	validate = oauth.authenticate()
	return validate(req,res,next)
}

module.exports.generateToken = function(req,res,next){

	var oauth = new ExpressOAuthServer({
		model: authmodel,
	  	useErrorHandler: false,
	    continueMiddleware: false,
	    requireClientAuthentication: {password: false}
	});

	let token = oauth.token();

 	return token(req,res,next);
 	
}