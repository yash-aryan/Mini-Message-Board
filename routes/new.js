const express = require('express');
const messages = require('../messages');
const router = express.Router();

router
	.route('/')
	.get((req, res) => {
		res.render('new', { title: 'Add Message' });
	})
	.post((req, res) => {
		messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
		res.redirect('/');
	});

module.exports = router;
