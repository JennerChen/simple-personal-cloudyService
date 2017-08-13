import React from "react";
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
import Cloud from '../cloud';
const menuWidth = 180;
const MenuWrap = styled.div`
	position:fixed;
	left:0;
	top:0;
	background-color:#333;
	width:${ menuWidth  }px;
	height:100%;
	overflow-x:hidden;
`;

const MenuInner = styled.div`
	width:${ menuWidth + 17 }px;
	overflow-x:hidden;
	height:100%;
`;
export default class Home extends React.Component{
	render(){
		return <div>
			Home Page;
			<MenuWrap>
				<MenuInner>
					<div style={ {width:menuWidth} }>
						hehe
					</div>
					<Menu
						theme={"dark"}
						// 				onClick={this.handleClick}
						style={{ width: menuWidth }}
						defaultOpenKeys={['sub1','sub2','sub4']}
						// 				selectedKeys={[this.state.current]}
						mode="inline"
					>
						<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
							<Menu.Item key="1">Option 1</Menu.Item>
							<Menu.Item key="2">Option 2</Menu.Item>
							<Menu.Item key="3">Option 3</Menu.Item>
							<Menu.Item key="4">Option 4</Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
							<Menu.Item key="5">Option 5</Menu.Item>
							<Menu.Item key="6">Option 6</Menu.Item>
							<SubMenu key="sub3" title="Submenu">
								<Menu.Item key="7">Option 7</Menu.Item>
								<Menu.Item key="8">Option 8</Menu.Item>
							</SubMenu>
						</SubMenu>
						<SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
							<Menu.Item key="9">Option 9</Menu.Item>
							<Menu.Item key="10">Option 10</Menu.Item>
							<Menu.Item key="11">Option 11</Menu.Item>
							<Menu.Item key="12">Option 12</Menu.Item>
						</SubMenu>
					</Menu>
				</MenuInner>
			</MenuWrap>
			
			<Switch>
				<Route component={ Cloud } path="/cloud"/>
			</Switch>
		</div>
	}
}