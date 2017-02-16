import React from 'react';
class App extends React.Component {
	
	render(){
		const { user } = this.props;
		return <div>TEST { user ? user.name : "请登录" }</div>
	}
}

export default App;