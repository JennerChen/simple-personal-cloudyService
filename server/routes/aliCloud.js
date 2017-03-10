const express = require('express');
const router = express.Router();

const co = require('co');
const OSS = require('ali-oss');

const AliOssConfig = require('../../config/aliOss.json');
const client = new OSS(AliOssConfig);

router.get("/*", function (req, res, next) {
	req.session.user ? console.log(req.session.user.username) : console.log("用户未登录");
	next();
// 	if (req.session.user){
// 		next();
// 	}else{
// 		res.send({
// 			message:"当前需要登录"
// 		})
// 	}
});
router.get(["/files","/files/:dir"], function (req, res) {
	const dir = req.params.dir;
	co(function*() {
		const result = yield client.list({
			prefix: dir,
			delimiter: '/'
		});
		var dirFiles = result.objects,
			dirFolds = result.prefixes;
		
		res.send({
			dirFiles:dirFiles,
			dirFolds: dirFolds
		});
	}).catch(function (err) {
		console.log(err);
	});
});

module.exports = router;