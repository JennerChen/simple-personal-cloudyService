export default async function (ctx, next) {
	try {
		await next();
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.type = 'json';
		ctx.body = {
			message: ctx.app.isProduction ? err.message : err.stack,
			status: ctx.status
		};
	}
}