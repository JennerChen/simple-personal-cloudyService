import axios from 'axios';
import {connect} from 'react-redux';
import CloudFiles from '../../components/cloudDisk/cloudFiles';
import * as fileActions from '../../actions/cloudDisk/fileListActions';
const mapStateToProps = (store) => {
	return {
		files: store.fileList.files
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getFiles(dir = null){
			dispatch(fileActions.startFetchFileList());
			axios.get("/api/file/files" + (dir ? ("/" + dir) : "")).then((res) => {
				dispatch(fileActions.completeFetchFileList({
					dir,
					folds: res.data.dirFolds,
					fileList: res.data.dirFiles
				}));
			}).catch((err) => {
				dispatch(fileActions.errorFetchFileList());
			})
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CloudFiles);