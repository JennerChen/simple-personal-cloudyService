const userReducer = (state = {
	user: null,
	logging: false,
	logInfo: null
}, action) => {
	switch (action.type) {
		case "USER_LOGGED":
			return Object.assign({}, state, {user: action.user});
		case "USER_LOGGING":
			return Object.assign({}, state, {logging: true});
		case "USER_LOG_COMPLETE":
			return Object.assign({}, state, {
				logging: false,
				user: action.user,
				logInfo: action.user ? null : '账号或者密码错误'
			});
		case "USER_LOGIN_MESSAGE_SHOWN":
			return Object.assign({}, state, {
				logInfo: null
			})
	}
	return state;
};

export default userReducer