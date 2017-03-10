import React from 'react';
import MenuBar from '../containers/menu/menuBar';

class App extends React.Component {
	render() {
		const { children } = this.props;
		return (<div>
			<MenuBar />
			{ children }
		</div>);
	}
}

export default App;