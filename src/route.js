import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, Redirect} from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Radium from 'radium';
import appStore from './store';

import App from './containers/app';
import Login from './containers/user/login';
import CloudDisk from './components/cloudDisk/cloudDisk';
import CloudFiles from './containers/cloudDisk/cloudFiles';
injectTapEventPlugin();

const requireAuth = (nextState, replace) => {
	if (appStore.getState().user.user === null) {
		replace("/login");
	}
};
const enterLogin = (nextState, replace) => {
	if (appStore.getState().user.user) {
		replace("/")
	}
};
export default () => {
	return <Radium.StyleRoot>
		<MuiThemeProvider>
			<Provider store={ appStore }>
				<Router history={ browserHistory }>
					<Route path="/login" component={ Login } onEnter={ enterLogin }/>
					<Route path="/" component={ App } onEnter={ requireAuth }>
						<IndexRoute component={ CloudDisk }/>
						<Route path="file" component={ CloudDisk }>
							<Redirect from="files(/:dir)" to="/files(/:dir)"/>
						</Route>
						<Route path="files(/:dir)" component={ CloudFiles }/>
					</Route>
				</Router>
			</Provider>
		</MuiThemeProvider>
	</Radium.StyleRoot>
};