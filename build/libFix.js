const rimraf = require('rimraf');
const path = require('path');
function velocityReact() {
	rimraf.sync(path.resolve("./node_modules/velocity-react/.babelrc"));
}

function mobx() {
	rimraf.sync(path.resolve("./node_modules/mobx/lib/mobx.js.flow"))
}
function mobxReactDevTool() {
	rimraf.sync(path.resolve("./node_modules/mobx-react-devtools/.babelrc"))
}
module.exports = {
	velocityReact: velocityReact,
	mobx:mobx,
	mobxReactDevTool:mobxReactDevTool
};