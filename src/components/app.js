import React from 'react';
import Login from '../containers/user/login';
import MenuBar from './menu/menuBar';

class App extends React.Component {
	render() {
		const {user, children } = this.props;
		if (user) {
			return (<div>
				<MenuBar/>
				{ children }
			</div>)
		} else {
			return <Login/>
		}
	}
}

export default App;