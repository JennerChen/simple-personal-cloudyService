import React from 'react';
import Radium from 'radium';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router';

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

@Radium
class App extends React.Component {
	render() {
		const {children} = this.props;
		return (<Layout>
			<Header>
				<Menu
					style={{ lineHeight: '64px' }}
					theme="dark"
					mode="horizontal"
				>
					<Menu.Item key="file">
						<Link to="/file" style={ { fontSize: 20+"px"} }><Icon type="hdd" />文件</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content>
				{ children }
			</Content>
		</Layout>);
	}
}
export default App;