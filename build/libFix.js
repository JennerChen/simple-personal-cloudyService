const rimraf = require('rimraf');
const path = require('path');

function velocityReact() {
	const rimraf = require('rimraf');
	rimraf.sync(path.resolve("./node_modules/velocity-react/.babelrc"));
}

module.exports = {
	velocityReact: velocityReact
};