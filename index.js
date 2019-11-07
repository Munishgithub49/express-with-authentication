/*jshint esversion: 6 */
const express = require('express');
const bodyparser = require('body-parser');
const users = require('./routes/users')
const home = require('./routes/home')
const auth = require('./routes/auth')

const app = express();

//To read post/put body in json format
//app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/api/users',users);
app.use('/',home);
app.use('/api/token',auth);


//Get PORT from envirnment 
const port = process.env.PORT || 5000;

//Make http request listen on given port
app.listen(port,(req,res)=>{ console.log(`listening ${port}`)});