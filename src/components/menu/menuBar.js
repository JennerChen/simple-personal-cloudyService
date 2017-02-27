import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link } from 'react-router';
import Radium from 'radium';
const style = {
	cloudDisk:{
		textDecoration:'none',
		display:'inline-block',
		width:"100%",
		':hover':{
			color:'pink'
		}
	},
	activeLink:{
		backgroundColor:'rgb(0, 188, 212)'
	}
};
@Radium
class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'abc',
			slideMenuOpen: false
		};
		this.openSideMenu = this.openSideMenu.bind(this);
		this.closeSideMenu = this.closeSideMenu.bind(this);
	}
	
	openSideMenu() {
		this.setState({
			slideMenuOpen: true
		})
	}
	
	closeSideMenu() {
		this.setState({
			slideMenuOpen: false
		})
	}
	
	render() {
		return <div>
			<AppBar
				title={ this.state.name }
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				onLeftIconButtonTouchTap={ this.openSideMenu }
			/>
			<div style={ [style.cloudDisk] }>为什么没有用？？？</div>
			<Drawer
				docked={false}
				width={200}
				open={this.state.slideMenuOpen }
				onRequestChange={(slideMenuOpen) => this.setState({slideMenuOpen})}
			>
				<MenuItem onTouchTap={this.closeSideMenu}>
					<Link to="/file" style={ [style.cloudDisk] }>
						云盘
					</Link>
				</MenuItem>
				<MenuItem onTouchTap={this.closeSideMenu}>Menu Item 2</MenuItem>
			</Drawer>
		</div>
	}
}

export default MenuBar;