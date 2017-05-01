import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import {Card, Icon, Button, Progress, Input, Modal, Radio} from 'antd';
import FileList from '../../containers/cloudDisk/fileList';
import plupload from 'plupload';
import utils from '../../utils/index';
const RCard = Radium(Card);
const style = {
	base: {
		width: 350 + "px",
		background: "white",
		minHeight: "300px",
		margin: "30px auto",
		'@media (min-width: 768px)': {
			width: 700 + "px",
			"marginTop": "25px"
		},
		'@media (min-width: 1024px)': {
			width: 900 + "px",
			"marginTop": "35px"
		},
		'@media (min-width: 1600px)': {
			width: 1400 + "px",
			"marginTop": "45px"
		},
	},
	foldLink: {
		wrap: {
			fontSize: "14px",
			padding: "0 0 5px 0"
		},
		link: {
			textDecoration: "none",
			color: 'rgb(0, 188, 212)',
			":hover": {
				textDecoration: "underline"
			},
			":active": {
				textDecoration: "underline"
			}
		}
	},
	loadingWrap: {
		zIndex: 10,
		position: 'absolute',
		width: 100 + "%",
		height: "100%",
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	},
	loading: {
		fontSize: 72 + "px",
		position: 'absolute',
		left: 50 + "%",
		top: 50 + "%",
		transform: "translate(-50%,-50%)"
	},
	fileList: {
		borderRadius: 5 + "px",
		border: "1px solid #efefef",
		height: 250 + "px",
		position: 'relative',
		padding: "15px 10px",
		'@media (min-width: 768px)': {
			height: 400 + "px"
		},
		'@media (min-width: 1024px)': {
			height: 500 + "px"
		},
		'@media (min-width: 1600px)': {
			height: 700 + "px"
		}
	},
	uploadWrap: {
		display: "inline-block",
		padding: "5px 0"
	},
	uploadProgressWrap: {
		position: "relative",
		width: "200px"
	},
	uploadBtn: {
		margin: "0 8px 0 10px"
	},
	addDirBtn: {
		margin: "0 0 0 10px"
	},
	uploadSpan: {
		position: 'absolute',
		left: "200px",
		top: "-3px",
		whiteSpace: "nowrap"
	},
	uploadFileAction_rename: {
		margin: "0 5px",
		cursor: "pointer",
		transition: "color 0.3s",
		color: "#108ee9",
		":hover": {
			color: "#49a9ee"
		}
	},
	uploadFileAction_remove: {
		cursor: "pointer",
		transition: "color 0.3s",
		":hover": {
			color: '#ff4f0b'
		}
	},
	uploadFileAction_active: {
		color: 'green'
	},
	renameModal: {
		textAlign: "center"
	},
	navLink: {
		cursor: 'pointer',
		marginRight: "5px",
		padding: "0 2px",
		":hover": {
			textDecoration: 'underline',
			background: '#eee'
		}
	}
};
@Radium
class UploadFile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rename: false
		}
	}
	
	openRenameFileModal = () => {
		this.setState({
			rename: true
		})
	};
	
	render() {
		const {file, updateFileInfo, removeFile} = this.props;
		const {rename} = this.state;
		const pgProps = {
			strokeWidth: 5,
			percent: file.percent,
			status: (() => {
				switch (file.status) {
					case 2:
						return "active";
					case 4:
						return "exception";
					case 5:
						return "success";
					default:
						return "normal";
				}
			})()
		};
		return <div style={ style.uploadProgressWrap }>
			<Progress {...pgProps}> { file.name } </Progress>
			<span style={ style.uploadSpan }>
				{ file.name }
				{ pgProps.status === "normal" ?
					<i key="rename" onClick={ this.openRenameFileModal } className="iconfont icon-bianji"
					   style={ [style.uploadFileAction_rename]}/> : null }
				{ pgProps.status === "normal" || pgProps.status === "success" ?
					<i key="remove" onClick={ () => {
						removeFile(file)
					} } className="iconfont icon-shanchu"
					   style={ [style.uploadFileAction_remove]}/> : null }
				
				{ pgProps.status === "active" ? <i key="uploading" className="iconfont icon-iconfontyuandian"
				                                   style={ [style.uploadFileAction_active]}/> : null }
			</span>
			
			<Modal title="修改文件名" visible={ rename }
			       onOk={ () => {
				       updateFileInfo(this.renameBox.refs.input.value, file);
				       this.setState({
					       rename: false
				       });
			       }} onCancel={ () => {
				this.setState({
					rename: false
				})
			} }
			>
				<p style={ style.renameModal }>
					<Input ref={ (renameBox) => {
						this.renameBox = renameBox
					} } defaultValue={ file.name } style={ {width: "200px"} }/>
				</p>
			</Modal>
		</div>
	}
}

class UploadBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			uploadToRoot: false
		}
	}
	
	componentDidMount() {
		const that = this;
		const {refreshFiles} = this.props;
		const updateFiles = () => {
			let {files} = that.state;
			that.setState({
				files: files
			});
		};
		that.uploader = new plupload.Uploader({
			browse_button: this.uploadDiv.querySelector('.addFile'),
			container: this.uploadDiv,
			filters: {
				prevent_duplicates: true //不允许选取重复文件
			},
			init: {
				FilesAdded: function (up, files) {
					that.setState({
						files: [...that.state.files, ...files]
					});
				},
				BeforeUpload(up, file){
					let {signature, dir} = that.props;
					const {uploadToRoot} = that.state;
					up.setOption({
						url: signature.host,
						multipart_params: {
							key: uploadToRoot || dir === "/" ? file.name : (dir + file.name),
							success_action_status: '200',
							OSSAccessKeyId: signature.accessid,
							signature: signature.signature,
							policy: signature.policy
						}
					});
					
					up.start();
				},
				UploadProgress: updateFiles,
				FileUploaded: () => {
					let {dir} = that.props;
					updateFiles();
					refreshFiles(dir);
				},
				Error(up, err){
					const {code, message, file} = err;
					if (code === 602) {
						console.error(message, file)
					}
				}
				
			}
		});
		that.uploader.init();
	}
	
	removeFile = (fileInfo) => {
		this.uploader.removeFile(fileInfo);
		this.setState({
			files: this.state.files.filter((f) => {
				return f.id !== fileInfo.id;
			})
		})
	};
	updateFileInfo = (newName, fileInfo) => {
		this.setState({
			files: this.state.files.map((f) => {
				if (f.id === fileInfo.id) {
					fileInfo.name = newName;
					return fileInfo
				}
				return f;
			})
		});
	};
	uploadFileAll = () => {
		let {signature, getSignature} = this.props;
		if (!signature || utils.common.uploadSignatureValidate(signature)) {
			getSignature(() => {
				this.uploader.start();
			});
			return false;
		} else {
			this.uploader.start();
		}
	};
	changeUploadRoot = (e) => {
		this.setState({
			uploadToRoot: e.target.value
		})
	};
	
	render() {
		const {uploadToRoot} = this.state;
		const uploadFiles = this.state.files.map((f, i) => {
			return <UploadFile key={ f.id } file={ f} updateFileInfo={ this.updateFileInfo }
			                   removeFile={ this.removeFile }/>
		});
		return <div ref={ (upload) => {
			this.uploadDiv = upload
		}} style={ style.uploadWrap }>
			<Button className="addFile">添加文件</Button>
			<Button type="primary" onClick={ this.uploadFileAll } style={ style.uploadBtn }> 上传 </Button>
			<Radio.Group onChange={this.changeUploadRoot} value={ uploadToRoot }>
				<Radio value={true}>根目录</Radio>
				<Radio value={false}>当前目录</Radio>
			</Radio.Group>
			{ uploadFiles }
		</div>
	}
}
@Radium
class FoldLink extends React.Component {
	render() {
		const {location, name, currentFold} = this.props;
		if (currentFold) {
			return <span>
				{ name }
			</span>
		}
		return <span >
			<Link className="dirLink" to={ location }>
				{ name }
			</Link> /
		</span>
	}
}
@Radium
class LoadingWrap extends React.Component {
	render() {
		return <div style={ style.loadingWrap }>
			<Icon type="loading" style={ style.loading }/>
		</div>
	}
}
@Radium
class CloudFiles extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		if (this.props.files === null) {
			this.props.getFiles()
		}
	}
	
	render() {
// 		const dirs = this.props.location.query.dir || [];
		const {files, fetchingFile, signature, getSignature, getFiles, dir} = this.props;
		let navLinks = [{
				display: "root/",
				dir: "/"
			}],
			navLocation = "";
		dir.split("").forEach(function (l) {
			if (l === "/" && navLocation.length >= 1) {
				navLinks.push({
					display: navLocation.split("/").pop() + "/",
					dir: navLocation + "/"
				});
			} else {
				navLocation += l;
			}
		});
		navLinks = navLinks.map(function (l, i) {
			return <span style={ style.navLink } onClick={ getFiles.bind(null, l.dir) } key={ i }> { l.display } </span>
		});
		return <RCard style={ [style.base] }>
			<div style={ style.foldLink.wrap }>
				目录：{ navLinks }
			</div>
			<UploadBox signature={ signature } getSignature={ getSignature } refreshFiles={ getFiles } dir={ dir }/>
			<div style={ [style.fileList]}>
				{ fetchingFile ? <LoadingWrap /> : <FileList /> }
			</div>
		</RCard>
	}
}

export default CloudFiles;