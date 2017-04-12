import {connect} from 'react-redux';
import FileList from '../../components/cloudDisk/fileList';
import {getDownloadUrl, deleteFile, fetchFiles} from '../../actions/cloudDisk/fileListActions';
const mapStateToProps = (store) => {
	return {
		folds: store.fileList.files ? store.fileList.files.folds : [],
		files: store.fileList.files ? store.fileList.files.fileList : []
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getFiles(dir = "/"){
			dispatch(fetchFiles(dir));
		},
		getDownloadUrl(fileKey, etag){
			dispatch(getDownloadUrl(fileKey, etag));
		},
		saveFile(url){
			const link = document.createElement("a");
			link.target="_blank";
			link.download = "";
			link.href = url;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		},
		deleteFile(fileKey){
			dispatch(deleteFile(fileKey));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FileList);