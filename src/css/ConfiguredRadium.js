const Radium = require('radium');
function ConfiguredRadium(component) {
	return Radium({
		plugins:[
			Radium.Plugins.mergeStyleArray,
			Radium.Plugins.checkProps,
			Radium.Plugins.resolveMediaQueries,
			Radium.Plugins.resolveInteractionStyles,
			Radium.Plugins.keyframes,
			Radium.Plugins.visited,
			Radium.Plugins.removeNestedStyles,
			Radium.Plugins.prefix,
			Radium.Plugins.checkProps,
		]
	})(component);
}

export default ConfiguredRadium;
