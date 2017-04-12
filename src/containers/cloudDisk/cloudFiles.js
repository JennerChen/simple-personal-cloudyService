import {connect} from 'react-redux';
import CloudFiles from '../../components/cloudDisk/cloudFiles';
import * as fileActions from '../../actions/cloudDisk/fileListActions';
const mapStateToProps = (store) => {
	return {
		dir: store.fileList.files ? store.fileList.files.dir : "/",
		files: store.fileList.files,
		fetchingFile: store.fileList.fetchingFile,
		signature: store.fileList.signature
	}
};

const mapDispatchToProps = (dispatch,getState) => {
	return {
		getFiles(dir = "/"){
			dispatch(fileActions.fetchFiles(dir));
		},
		getSignature(cb){
			dispatch(fileActions.getUploadSignature(cb));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CloudFiles);