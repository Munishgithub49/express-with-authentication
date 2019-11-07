/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();


//url to check weather host is runing or not
router.get('/', function (req, res) {
	res.send('Domain Is Working');
});

module.exports = router;