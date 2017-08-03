class UserController {
	current(ctx, next) {
		if (ctx.session.user){
			ctx.body = {
				user: ctx.session.user
			}
		}else{
			ctx.body = {
				user:null,
				message:"没有登录"
			}
		}
	}
	
	async login(ctx, next) {
		const user = await ctx.app.db.models["User"].findOne({
			where:{
				username: ctx.request.body.username,
				password: ctx.request.body.password
			}
		});
		
		if (user){
			ctx.session.user = user;
			ctx.body = {
				user: user
			}
		}else{
			ctx.body = {
				message: "不正确的账号或者密码",
				user:null
			}
		}
		
	}
}

const single = new UserController();

export default single;

export const UserAction = UserController;