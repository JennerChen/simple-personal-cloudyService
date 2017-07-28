class UserController {
	current(ctx, next) {
		ctx.body = "abc"
	}
	
	async login(ctx, next) {
		ctx.body = {
			user: ctx.request.body
		}
	}
}

const single = new UserController();

export default single;

export const UserAction = UserController;