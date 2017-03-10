const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

const config = require('../config/serverConfig.json');
const users = require('./routes/users');
const alicloudOss = require('./routes/aliCloud');
app.use(express.static(path.resolve('./static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(session(config.session));

app.use("/api/user", users);
app.use("/api/file",alicloudOss);
app.get("*", function (req, res) {
	res.sendFile(path.resolve("index.html"));
});

app.listen(config.port, function (error) {
	if (error) throw error;
	console.log("Express listen on port:" + config.port);
});