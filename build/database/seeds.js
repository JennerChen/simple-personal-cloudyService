/**
 *
 * @param db { Database }
 * @return {Promise.<void>}
 */
export default async function (db) {
	const {models, sequelize} = db;
	
	if (models['User']) {
		await models['User'].bulkCreate([{
			id: 1,
			username: "admin",
			password: "123456"
		}]);
	}
	process.exit()
}