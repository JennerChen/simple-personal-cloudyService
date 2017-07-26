import Koa from 'koa';
import reponseTime from 'koa-response-time';
import logger from 'koa-logger';
import staticFiles from 'koa-static';
import bodyParser from 'koa-body';
import session from 'koa-session';
import path from 'path';
import log4js from 'koa-log4';

import errorHandler from './middleware/errorHandler';
import returnIndexPage from './middleware/returnIndexPage';
import load from './routes';

const /**@type { Application }*/app = new Koa();

app.keys = ["WaH6P8r03tn0PifBpd3Qo5hJ5CLD4X"];
app.isProduction = process.env.NODE_ENV === "production";

if (app.isProduction) {
	//todo production logger implementation
	app.use(/**@type { Application.Middleware }*/log4js.koaLogger(log4js.getLogger("http"), {level: 'auto'}));
} else {
	app.use(logger());
}

app.use(/**@type { Application.Middleware }*/ staticFiles(path.resolve('static')));

app.use(/**@type { Application.Middleware }*/ reponseTime());

app.use(/**@type { Application.Middleware }*/ errorHandler);

app.use(session(app));

app.use(bodyParser());

/**
 * 统计用户访问次数
 */
app.use(async (ctx, next) => {
	let n = ctx.session.views || 0;
	ctx.session.views = ++n;
	await next();
});

load(app);

app.use(/**@type { Application.Middleware }*/  returnIndexPage);

app.listen(4568);

export default app;