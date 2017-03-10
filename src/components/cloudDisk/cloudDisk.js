import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
const style = {
	page: {
		textAlign: 'center'
	},
	fileSelection: {
		width: 300 + "px",
		padding: "0 10px",
		display: 'inline-block',
		margin: "20px 50px",
		background: 'white',
		textAlign: 'center',
		overflow: 'hidden',
		boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
	},
	picStyle: {
		marginTop: "10px",
		width: "100%",
		transition: "transform .2s ease-out",
		cursor: 'pointer',
		":hover": {
			transform: "scale(1.1)"
		}
	},
	selectionTitle: {
		textDecoration: "none",
		fontSize: 24 + "px",
		color: "#333",
		lineHeight: "40px"
	},
	filePicStyle: {
		":hover": {
			transform: "scale(1.05)"
		}
	},
	videoStyle: {
		width: "100%"
	}
};

@Radium
class CloudDisk extends React.Component {
	componentDidMount() {
// 		this.video.addEventListener('mouseenter', () => {
// 			this.video.play();
// 		});
	}
	
	render() {
		return <div style={ style.page }>
			<div style={ [style.fileSelection]}>
				<Link to="/file/files" style={ style.selectionTitle }>文件流</Link>
				<img key="files" style={ [style.picStyle, style.filePicStyle] } src="/img/files.jpg"/>
			</div>
			<div style={ [style.fileSelection]}>
				<Link to="/file/photos" style={ style.selectionTitle }>照片流</Link>
				<img key="photos" style={ [style.picStyle] } src="/img/photos.jpg"/>
			</div>
			<div style={ [style.fileSelection]}>
				<Link to="/file/films" style={ style.selectionTitle }>视频流</Link>
				<video ref={ video => this.video = video } style={ [style.videoStyle]}
				       src="/videos/macbookpro2016_test.mp4" controls="controls">
					您的浏览器不支持 video 标签。
				</video>
			</div>
		</div>
	}
}
export default CloudDisk
