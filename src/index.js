import React from 'react';
import ReactDom from "react-dom";
import axios from 'axios';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools'
import './css/common.css';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import rootStore from './stores';
import Login from './pages/login/login';
import Home from "./pages/main/home";
import AuthRoute from "./components/authRoute";
import CV from "./pages/cv/cv";

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

//class App extends React.Component {
//	render() {
//		return <BrowserRouter>
//			<Provider store={ rootStore }>
//				<div>
//					<Switch>
//						<Route path="/login" exact component={ Login }/>
//					</Switch>
//					<DevTools />
//				</div>
//			</Provider>
//
//		</BrowserRouter>
//	}
//}

rootStore.userStore.checkUserIsSignin();
ReactDom.render(
	<BrowserRouter>
		<Provider store={ rootStore }>
			<div>
				<Switch>
					<AuthRoute Component={ Home } path="/" exact/>
					<Route path="/login" exact component={ Login }/>
					<Route path="/cv" exact component={ CV }/>
				</Switch>
				<DevTools />
			</div>
		</Provider>
	
	</BrowserRouter>, document.getElementById('root')
);
