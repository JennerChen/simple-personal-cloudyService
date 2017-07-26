import user from './user';

export default function load(app) {
	app.use( user.routes() )
		.use( user.allowedMethods());
}