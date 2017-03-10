export const startFetchFileList = () => {
	return {
		type: "START_FETCH_FILES"
	}
};
export const completeFetchFileList = (files) => {
	return {
		type: "COMPLETE_FETCH_FILES",
		files
	}
};

export const errorFetchFileList = () => {
	return {
		type: "ERROR_FETCH_FILES"
	}
};