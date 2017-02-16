const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

const config = require('../config/serverConfig.json');
const users = require('./routes/users');
app.use(express.static(path.resolve('./static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(session(config.session));

app.use("/user", users);

app.use('/', function (req, res) {
	res.sendFile(path.resolve("index.html"));
});


app.listen(config.port, function (error) {
	if (error) throw error;
	console.log("Express listen on port:" + config.port);
});