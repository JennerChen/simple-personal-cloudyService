import Router from 'koa-router';
import ossController from '../controller/ossController';
const r = new Router({
	prefix:"/oss"
});

r.get("/files", ossController.list);

export default r;