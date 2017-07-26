class UserController {
	current(ctx, next) {
		console.log('--');
		ctx.body = "abc"
	}
}

const single = new UserController();

export default single;

export const UserAction = UserController;