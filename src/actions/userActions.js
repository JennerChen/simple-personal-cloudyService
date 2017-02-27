export const userLogged = (user)=>{
	return {
		type: "USER_LOGGED",
		user: user
	}
};

export const userLogging = () => {
	return {
		type: "USER_LOGGING"
	}
};

export const userLogComplete = (user) => {
	return {
		type: "USER_LOG_COMPLETE",
		user: user
	}
};
export const userLoginMessageShown = ()=>{
	return {
		type: "USER_LOGIN_MESSAGE_SHOWN"
	}
};