import React from 'react';
import ReactDom from "react-dom";
import axios from 'axios';
import './css/common.css';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import Login from './pages/login/login';
// import appStore from './store';
// import {userLogged} from './actions/userActions';
// import Router from './route';
// import './css/style.less';
//
// axios.get('/api/user/current').then((d) => {
//
// 	appStore.dispatch(userLogged(d.data.user));
// 	ReactDom.render(
// 		<Router/>
// 		, document.getElementById('root'));
// });
//
//

class App extends React.Component {
	render() {
		return <BrowserRouter>
			<div>
				<Switch>
					<Route path="/login" exact component={ Login }/>
				</Switch>
			</div>
		</BrowserRouter>
	}
}

ReactDom.render(
	<App/>, document.getElementById('root')
);
