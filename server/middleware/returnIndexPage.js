import send from 'koa-send';
/**
 * SPA handling
 * 所有的html请求均返回 index.html
 */
export default async (ctx, next)=>{
	if (ctx.method === "GET") {
		await send(ctx, 'index.html', { root: 'static'});
	} else {
		await next();
	}
}