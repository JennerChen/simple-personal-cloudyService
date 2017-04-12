const fileListReducer = (state = {
	                         files: null,
	                         fetchingFile: false,
	                         signature: null
                         }, action) => {
	switch (action.type) {
		case "START_FETCH_FILES":
			return Object.assign({}, state, {
				fetchingFile: true
			});
		
		case "COMPLETE_FETCH_FILES":
			return Object.assign({}, state, {
				fetchingFile: false,
				files: action.files
			});
		
		case "ERROR_FETCH_FILES":
			return Object.assign({}, state, {
				fetchingFile: false
			});
		case "GET_DOWNLOAD_URL_COMPLETE":
			return Object.assign({}, state, {
				files: {
					dir: state.files.dir,
					folds: state.files.folds,
					fileList: state.files.fileList.map((f) => {
						if (f.etag === action.etag) {
							return Object.assign({}, f, {
								downloadUrl: action.url
							})
						}
						return f;
					})
				}
			});
		case "Delete_File_Complete":
			return Object.assign({}, state, {
				files: {
					dir: state.files.dir,
					folds: state.files.folds,
					fileList: state.files.fileList.filter((f) => {
						if (f.name !== action.name) {
							return f;
						}
					})
				}
			});
		case "Upload_Signature":
			return Object.assign({}, state,{
				signature: action.signature
			})
	}
	
	return state;
};

export default fileListReducer;
