import React from 'react';
import ReactDom from "react-dom";
import axios from 'axios';
import appStore from './store';
import {userLogged} from './actions/userActions';
import Router from './route';
import './css/style.less';
// import moment from 'moment';

axios.get('/api/user/current').then((d) => {
	
	appStore.dispatch(userLogged(d.data.user));
	ReactDom.render(
		<Router/>
		, document.getElementById('root'));
});


