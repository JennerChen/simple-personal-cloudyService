import React from 'react'
import ReactDom from "react-dom";
// import App from "./app.js";
// import '../css/app.css';
// import appStore from './store';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from "react-router";
import axios from 'axios';
import appStore from './store';
import App from './containers/app';

ReactDom.render(<Provider store={ appStore }>
	<Router history = { hashHistory }>
		<Route path="/" component={ App }/>
	</Router>
</Provider>, document.getElementById('root'));
