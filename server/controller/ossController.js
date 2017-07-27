import co from 'co';
import OSS from 'ali-oss';
const AliOssConfig = require('../../config/aliOss.json');
const client = new OSS(AliOssConfig);

class OssController {
	async list(ctx, next){
		let dir = ctx.query.dir ? ctx.query.dir : undefined;
		await co(function* () {
			const result = yield client.list({
				prefix: dir,
				delimiter: '/'
			});
			let dirFiles = result.objects,
				dirFolds = result.prefixes;
			ctx.body = {
				dirFiles: dirFiles ? dirFiles.filter(function (f) {
					return f.name !== dir;
				}) : [],
				dirFolds: dirFolds ? dirFolds : []
			}
		}).catch(function (err) {
			ctx.throw(500, err);
		});
	}
}

const single = new OssController();

export default single;

export const OssAction = OssController;
