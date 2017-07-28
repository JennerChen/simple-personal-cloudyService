import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
const config = require('../../config/serverConfig.json');
class Database {
	constructor() {
		this.sequelize = new Sequelize(
			config.db.databaseName,
			config.db.username,
			config.db.password, {
				host: config.db.host,
				dialect: config.db.dialect,
				port: config.db.port,
				pool: config.db.pool
			});
		
		this.Sequelize = Sequelize;
		
		this._loadModels(__dirname);
		
		this.models = this.sequelize.models;
		
		Object.values(this.models)
			.filter(m => m.relation)
			.forEach(m => m.relation(this.models));
		
		this.sequelize
			.authenticate()
			.then(() => {
				console.log('Connection has been established successfully.');
			})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
	}
	
// 	getAllSchemas() {
// 		let schemas = [];
// 		Object.values(this.models)
// 			.forEach(m => schemas.indexOf(m.options.schema) === -1 ? schemas.push(m.options.schema) : null);
//
// 		return schemas;
// 	}
	
	_loadModels(dir) {
		fs
			.readdirSync(dir)
			.filter(f => f !== "index.js")
			.forEach(f => f.indexOf(".") >= 0
				? this.sequelize.import(path.join(dir, f))
				: this._loadModels(path.join(dir, f)));
	}
	
	
}

export default Database;
