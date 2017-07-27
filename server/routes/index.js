import user from './user';
import oss from './oss';

export default function load(app) {
	app.use(user.routes())
		.use(user.allowedMethods());
	
	app.use(oss.routes())
		.use(oss.allowedMethods());
}