import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import {Row, Col, Card,Carousel } from 'antd';
import cssUtil from '../../css/cssUtil';
const RLink = Radium(Link);//https://github.com/FormidableLabs/radium/tree/master/docs/faq#can-i-use-my-favourite-csslesssass-syntax
const style = {
	page: {
		marginTop: 30 + "px",
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '980px'
	},
	fileSelection: {
		float: 'left',
		width: 'calc(99.9% * 0.33333333 - (30px - 30px * 0.33333333))',
// 		width: 300 + "px",
		padding: "0 10px",
// 		display: 'inline-block',
// 		margin: "20px 50px",
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
	},
	fileStreamSlide:{
		width:100+"%",
		backgroundColor: "#364d79",
		height:200+"px"
	}
};

@Radium
class CloudDisk extends React.Component {
	componentDidMount() {
	}
	
	render() {
		return <div style={ {padding: 30 + "px"} }>
			<Row>
				<Col xs={24} sm={12} md={8} lg={8} xl={6} style={ { padding: "5px 5px"} }>
					<Card>
						<RLink to="/file/files" style={ [style.selectionTitle] }>文件流</RLink>
						<img key="files" style={ [style.picStyle] } src="/img/files.jpg"/>
					</Card>
				</Col>
				<Col xs={24} sm={12} md={8} lg={8} xl={6} style={ { padding: "5px 5px"} }>
					<Card>
						<span style={ [style.selectionTitle] } onClick={ ()=>{
							alert("敬请期待");
						}}> 照片流</span>
						{/*<RLink to="/file/photos" style={ [style.selectionTitle] }>照片流</RLink>*/}
						<img key="photos" style={ [style.picStyle] } src="/img/photos.jpg"/>
					</Card>
				</Col>
				<Col xs={24} sm={12} md={8} lg={8} xl={6} style={ { padding: "5px 5px"} }>
					<Card>
						<span style={ [style.selectionTitle] } onClick={ ()=>{
							alert("敬请期待");
						}}> 照片流</span>
						{/*<RLink to="/file/films" style={ [style.selectionTitle] }>视频流</RLink>*/}
						<video ref={ video => this.video = video } style={ [style.videoStyle]}
						       src="/videos/macbookpro2016_test.mp4" controls="controls">
							您的浏览器不支持 video 标签。
						</video>
					</Card>
				</Col>
			</Row>
		</div>
	}
}
export default CloudDisk
