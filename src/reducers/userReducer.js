const userReducer = (state = {
	user: null,
	logging: false
}, action) => {
	switch (action.type) {
		case "USER_LOGGING":
			return Object.assign({}, state, {logging: true});
		case "USER_LOG_COMPLETE":
			return Object.assign({}, state, {
				loggind: false,
				user: action.user
			})
	}
	return state;
};

export default userReducer