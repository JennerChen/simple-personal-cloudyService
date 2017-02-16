const express = require('express');
const path = require('path');
const config = require('../config/serverConfig.json');
const app = express();
app.use(express.static(path.resolve('./static')));

app.get('/currentUser', function (req, res) {
	res.send({name: '张庆', right: 'ADMIN'});
});

app.use('/', function (req, res) {
	res.sendFile(path.resolve("index.html"));
});


app.listen(config.port, function (error) {
	if (error) throw error;
	console.log("Express listen on port:" + config.port);
});