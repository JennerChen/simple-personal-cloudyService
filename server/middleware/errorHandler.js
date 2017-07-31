export default async function (ctx, next) {
	try {
		await next();
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.type = 'json';
		
		ctx.body = {
			message: err.message ,
			status: ctx.status
		};
		if (!ctx.app.isProduction){
			ctx.body.stack = err.stack
		}
	}
}