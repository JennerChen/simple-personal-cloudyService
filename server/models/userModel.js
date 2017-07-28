export default (sequzlize, DataTypes) => {
	const User = sequzlize.define('User', {
		username: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.STRING,
			get(){
				return "******";
			}
		},
		accessToke:{
			type: DataTypes.STRING
		}
	});
	
	
	User.relation = function (models) {
// 		User.belongsTo(models['Silo']);
// 		User.belongsTo(models['Role']);
// 		User.belongsToMany(models['Module'], {through: 'UserModule'})
	};
	
	return User;
}