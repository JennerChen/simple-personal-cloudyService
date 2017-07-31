export default async function (ctx,next) {
	if (ctx.session.user){
		await next();
	}
	throw new Error("action un-authored");
}