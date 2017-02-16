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