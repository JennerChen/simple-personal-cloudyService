import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import appStore from './store';

import App from './containers/app';
import Login from './containers/user/login';
import CloudDisk from './components/cloudDisk/cloudDisk';

injectTapEventPlugin();
export default () => {
	return <MuiThemeProvider>
		<Provider store={ appStore }>
			<Router history={ hashHistory }>
				<Route path="/login" component={ Login }/>
				<Route path="/" component={ App }>
					<IndexRoute component={ CloudDisk }/>
					<Route path="file" component={ CloudDisk }/>
				</Route>
			</Router>
		</Provider>
	</MuiThemeProvider>
};