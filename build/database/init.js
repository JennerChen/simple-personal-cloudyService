import Sequelize from 'sequelize';
import Database from '../../server/models/index';
import initSeeds from './seeds';
const db = new Database();

async function resetDatabase() {
	await db.sequelize.dropAllSchemas();
	await db.sequelize.drop();
}

async function initTables() {
	await db.sequelize.sync({
		force: true
	})
}

async function reset() {
	await resetDatabase();
	await initTables();
	await initSeeds(db);
}

reset().then(res => console.log('reset db success'));
