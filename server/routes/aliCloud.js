const express = require('express');
const router = express.Router();

const co = require('co');
const OSS = require('ali-oss');

const AliOssConfig = require('../../config/aliOss.json');
const crypto = require('crypto');
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
router.get(["/files", "/files/:dir"], function (req, res) {
	var dir = req.params.dir;
	dir = dir ? dir + "/" : undefined;
	co(function*() {
		const result = yield client.list({
			prefix: dir,
			delimiter: '/'
		});
		var dirFiles = result.objects,
			dirFolds = result.prefixes;
		
		res.send({
			dirFiles: dirFiles ? dirFiles.filter(function (f) {
				return f.name !== dir;
			}) : [],
			dirFolds: dirFolds ? dirFolds : []
		});
	}).catch(function (err) {
		console.log(err);
	});
});
router.post("/signatureUrl", function (req,res) {
	const fileName = req.body.name;
	const url = client.signatureUrl(fileName);
	res.send({
		url: url
	})
});
router.get("/signatureUrl/:filename", function (req, res) {
	const filename = req.params.filename;
	const url = client.signatureUrl(filename);
	res.send({
		url: url
	})
});

router.delete("/:filename", function (req, res) {
	const filename = req.params.filename;
	co(function*() {
		const result = yield client.delete(filename);
		res.send({
			status: "ok",
			filename: filename,
			result: result
		})
	}).catch(function (err) {
		res.send({
			status: "fail",
			err: err
		})
	});
});
/**
 * 获取 oss 临时上传权限, 根据 oss 要求的参数伪装生成参数
 */
router.get("/signatureUpload", function (req, res) {
	const current = (new Date()).getTime(),
		//30 分钟的有效时间
		expires = current + 1000 * 60 * 30,
		policy = {
			expiration: new Date(expires).toISOString(),
			conditions: [
				["content-length-range", 0, 1048576000]
			]
		},
		// policy base64编码
		policyBase64 = new Buffer(JSON.stringify(policy)).toString("base64"),
		// sha1 加密, 秘钥 为 AliOssConfig.accessKeySecret, 加密 policyBase64 以base64输出
		signature = crypto.createHmac('sha1', AliOssConfig.accessKeySecret).update(policyBase64).digest('base64');
	
	res.send({
		accessid: AliOssConfig.accessKeyId,
		host: "http://" + AliOssConfig.bucket + "." + AliOssConfig.region + ".aliyuncs.com",
		policy: policyBase64,
		signature: signature,
		expire: expires
	});
});
router.post("/createDir", function (req, res) {
	var foldName = req.body.foldName;
	if (foldName[foldName.length - 1] !== "/") {
		foldName = foldName + "/";
	}
	co(function*() {
		var result = yield client.put(foldName, new Buffer(''), {
			meta: {
				type: 'dir'
			}
		});
		res.send({
			result,
			status:'ok'
		});
	}).catch(function (err) {
		res.send({
			err:err
		})
	});
	
});
module.exports = router;