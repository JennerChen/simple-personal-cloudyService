import React from 'react';
import Radium from 'radium';
import {Tooltip, Button, Modal} from 'antd';
import {Motion, spring} from 'react-motion';
import {browserHistory} from 'react-router'
const style = {
	wrap: {
		textAlign: 'center',
		float: 'left',
		width: 80 + "px",
		height: 80 + "px",
		backgroundColor: "rgba(239, 239, 239,.2)",
		borderRadius: "5px",
		margin: "10px",
		padding: "10px 2px 2px 2px",
		cursor: "pointer",
		position: "relative",
		":hover": {
			backgroundColor: "rgba(239, 239, 239,.7)",
			boxShadow: "0 1px 6px rgba(0, 0, 0, 0.2)",
		}
	},
	fileIcon: {
		fontSize: "36px",
		color: '#49a9ee',
		lineHeight: "36px"
	},
	filename: {
		width: "100%",
		overflow: "hidden",
		padding: "0 3px",
		lineHeight: "14px",
		height: "30px"
	},
	fileAction: {
		cursor: "default",
		zIndex: 10,
		fontSize: "14px",
		width: "100%",
		position: "absolute",
		left: 0,
		backgroundColor: "#404040",
		padding: "5px 0"
	},
	fileActionBtn: {
		margin: "0 5px"
	},
	foldIcon: {
		fontSize: "36px",
		color: '#EEDE2C',
		lineHeight: "36px"
	}
};

const FileActions = (props) => {
	const {download, deleteFile} = props;
	return <Motion defaultStyle={ {
		opacity: 0,
		top: 40
	} } style={{
		opacity: spring(1),
		top: spring(78)
	}}>
		{
			(value) => {
				return <div style={ Object.assign({}, style.fileAction, {
					top: value.top + "px",
					opacity: value.opacity
				}) }>
					<Button shape="circle" type="primary" style={ style.fileActionBtn } onClick={ download }>
						<i className="iconfont icon-xiazai"/>
					</Button>
					<Button shape="circle" type="danger" style={ style.fileActionBtn } onClick={ deleteFile }>
						<i className="iconfont icon-shanchu"/>
					</Button>
				</div>
			}
		}
	</Motion>
};

@Radium
class FileItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		}
	}
	
	getDownloadUrl = () => {
		const {
			getDownloadUrl, file: {
				etag,
				name
			}
		} = this.props;
		getDownloadUrl(name, etag);
	};
	
	download = () => {
		const {download, file} = this.props;
		if (file.downloadUrl) {
			download(file.downloadUrl);
			this.setState({
				clicked: false
			})
		}
	};
	
	deleteFile = () => {
		const {deleteFile, file} = this.props;
		Modal.confirm({
			title: '警告',
			content: `一经删除无法撤销,确认删除文件 ${ file.name }吗?`,
			okText: '确定',
			cancelText: '取消',
			onOk: deleteFile.bind(null, file.name)
		});
	};
	
	render() {
		const {file} = this.props;
		const {downloadUrl} = file;
		const {clicked} = this.state;
		let displayFileName = file.name.split("/").pop();
		return <div style={ [style.wrap] } onClick={ () => {
			this.setState({
				clicked: !clicked
			});
			if (!downloadUrl) {
				this.getDownloadUrl();
			}
		} }>
			<i style={ style.fileIcon } className="iconfont icon-file"/>
			<Tooltip title={ file.name} placement="right">
				<div style={ style.filename }>{ displayFileName}</div>
			</Tooltip>
			{clicked ?
				<FileActions url={ downloadUrl } deleteFile={ this.deleteFile } download={ this.download }/> : ""  }
		</div>
	}
}
@Radium
class FoldItem extends React.Component {
	
	navToDir = () => {
		const {foldName,navToFold} = this.props;
		navToFold(foldName);
	};
	
	render() {
		const {foldName} = this.props;
		const displayFileName = foldName.substring(0, foldName.length - 1);
		return <div style={ [style.wrap] } onClick={ () => {
			this.navToDir()
		} }>
			<i style={ style.foldIcon } className="iconfont icon-fold"/>
			<Tooltip title={ displayFileName} placement="right">
				<div style={ style.filename }>{ displayFileName } </div>
			</Tooltip>
		</div>;
	}
}
@Radium
class FileList extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		const {files, getDownloadUrl, saveFile, deleteFile, folds, getFiles} = this.props;
		const fileItems = files.map((f) => {
			return <FileItem key={ f.etag } file={ f } getDownloadUrl={ getDownloadUrl } download={ saveFile }
			                 deleteFile={ deleteFile }/>
		});
		const foldsItems = folds.map((f) => {
			return <FoldItem key={ f } foldName={ f } navToFold={ getFiles }/>;
		});
		return <div className="fileList">
			{ foldsItems }
			{ fileItems }
		</div>
	}
}

export default FileList
