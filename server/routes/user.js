import Router from 'koa-router';
import userController from '../controller/userController';

const r = new Router({
	prefix: '/user'
});

r.get("/current", userController.current);

export default r;