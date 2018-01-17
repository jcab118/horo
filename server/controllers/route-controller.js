var express = require('express');
var path = require('path');
var router = express.Router();
var mc = require('./model-controller.js');
var models = require('./../models');

var html_creator = require('../helpers/html_creator.js');

router.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/home.html'));
});

router.get('/get-users', function(req, res) {
	mc.getAllUsers((users) => {
		// console.log(users);
		res.json(users);
	});
});

router.post('/create-user', (req, res) => {
	console.log(req.body);
	mc.createUser(
		req.body.name,
		req.body.birthdate,
		req.body.zodiac,
		(user) => {
			res.json(user);
		});
});

router.get('/zodiac', function(req, res) {
	mc.getAllZodiacs((signs) => {
		res.json(signs);
	});
});

router.get('/zodiac/:zodiac', function(req, res) {
	mc.getOneZodiac(
		req.params.zodiac,
		(signsBySign) => {
			res.send(html_creator(signsBySign));
		}
	);
});

router.post('/create-zodiac', (req, res) => {
	mc.createZodiac(
		req.body.zodiac,
		req.body.todays_horoscope,
		req.body.description,
		req.body.date_range,
		(zodiacData) => {
			res.json(zodiacData);
		}
	);
});

module.exports = router;