import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
const style = {
	base: {
		width: 350 + "px",
		background: "white",
		minHeight: "200px",
		margin: "10px auto",
		padding: "10px",
		boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
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
			fontSize:"14px"
		},
		link:{
			textDecoration:"none",
			color:'rgb(0, 188, 212)',
			":hover":{
				textDecoration:"underline"
			},
			":active":{
				textDecoration:"underline"
			}
		}
	}
};

@Radium
class FoldLink extends React.Component {
	render() {
		const {location, name, currentFold} = this.props;
		if (currentFold){
			return <span>
				{ name }
			</span>
		}
		return <span >
			<Link className="dirLink"  to={ location }>
				{ name }
			</Link> /
		</span>
	}
}
@Radium
class CloudFiles extends React.Component {
	componentDidMount() {
		if (this.props.files === null) {
			this.props.getFiles()
		}
	}
	
	render() {
		const dirs = this.props.location.query.dir || [];
		
		const dirLinks = [].concat(dirs).map((dirName, index) => {
			return <FoldLink key={ index } location={ {pathname: "/files", query: {dir: dirs.slice(0, index + 1)}}}
			                 name={ dirName } currentFold={ index === (dirs.length - 1) }/>
		});
		
		return <div style={ [style.base]}>
			<div style={ style.foldLink.wrap }>
				目录： { dirLinks }
				
			</div>
			<div className="col-3" style={ { height:50+"px" }} data-index="1"></div>
			<div className="col-3" style={ { height:50+"px" }} data-index="2"></div>
			<div className="col-3 " style={ { height:50+"px" }} data-index="3"></div>
		</div>
	}
}
export default CloudFiles;