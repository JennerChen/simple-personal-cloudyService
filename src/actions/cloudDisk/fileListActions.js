import axios from 'axios';
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
export const getDownloadUrlComplete = (url, etag) => {
	return {
		type: "GET_DOWNLOAD_URL_COMPLETE",
		url,
		etag
	}
};
export const deleteFileComplete = (fileKey) => {
	return {
		type: "Delete_File_Complete",
		name: fileKey
	}
};
export const uploadSignature = (signature) => {
	return {
		type: "Upload_Signature",
		signature
	}
};
export const fetchFiles = (dir = "/") => {
	return (dispatch) => {
		dispatch(startFetchFileList());
		
		axios.get("/api/file/files" + (dir[0] === "/" ? dir : ("/" + dir))).then((res) => {
			dispatch(completeFetchFileList({
				dir,
				folds: res.data.dirFolds,
				fileList: res.data.dirFiles.sort((a, b) => {
					return new Date(a.lastModified).getTime() - new Date(b.lastModified).getTime();
				})
			}));
		}).catch(() => {
			dispatch(errorFetchFileList());
		})
	}
};

export const getDownloadUrl = (fileKey, etag) => {
	return (dispatch) => {
		axios.post('/api/file/signatureUrl',{
			name: fileKey
		}).then((res) => {
			dispatch(getDownloadUrlComplete(res.data.url, etag))
		}).catch(() => {
			console.log('error');
		})
	}
};

export const deleteFile = (fileKey) => {
	return (dispatch) => {
		axios.delete('/api/file/' + fileKey).then((res) => {
			dispatch(deleteFileComplete(fileKey));
		}).catch(() => {
			console.log('error');
		})
	}
};
export const getUploadSignature = (cb) => {
	return (dispatch) => {
		return axios.get('/api/file/signatureUpload').then((res) => {
			dispatch(uploadSignature(res.data));
			if (cb) {
				cb();
			}
		})
	}
};