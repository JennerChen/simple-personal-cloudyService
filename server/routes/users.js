const express = require('express');
const router = express.Router();
const config = require('../../config/serverConfig.json');
router.get("/current", function (req, res) {
	res.send({
		user: req.session.user ? req.session.user : null,
		login: !!req.session.user
	})
});

router.post("/login", function (req, res) {
	var message = "登录成功";
	if (req.session.user) {
		message = "已经登录成功"
	} else if (req.body.name === config.user.name && req.body.password === config.user.password) {
		req.session.user = {
			name: config.user.name,
			nickname: config.user.nickname
		};
	} else {
		message = "账号密码错误";
	}
	
	res.send({
		user: req.session.user ? req.session.user : null,
		login: !!req.session.user,
		message: message
	});
	
});

router.post("/logout",function (req,res) {
	req.session.user = null;
	res.send({
		login: false,
	});
});
module.exports = router;