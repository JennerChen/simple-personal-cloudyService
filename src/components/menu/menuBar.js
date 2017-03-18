import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router';
import Radium from 'radium';
const style = {
	cloudDisk: {
		textDecoration: 'none',
		display: 'inline-block',
		width: "100%"
	},
	linkText:{
		lineHeight:"45px",
		fontSize: "16px",
		paddingLeft:"15px",
		letterSpacing:"5px",
		':hover':{
			fontWeight: 'bold'
		}
	},
	activeLink: {
		backgroundColor: 'rgb(0, 188, 212)',
		color: 'white'
	}
};

@Radium
class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		console.log(React);
		return <div>
			<AppBar
				title={ "欢迎: "+this.props.user.nickname }
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				onLeftIconButtonTouchTap={ this.openSideMenu }
			/>
			<Drawer
				docked={false}
				width={200}
				open={this.state.slideMenuOpen }
				onRequestChange={(slideMenuOpen) => this.setState({slideMenuOpen})}
			>
				<Link to="/file" onTouchTap={this.closeSideMenu} style={ style.cloudDisk }
				      activeStyle={ style.activeLink  }>
					<span style={ [style.linkText] }>云盘</span>
				</Link>
			</Drawer>
		</div>
	}
}

export default MenuBar;