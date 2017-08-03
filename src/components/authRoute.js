import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

@inject("store")
@observer
export default class AuthRoute extends React.PureComponent {
	render() {
		const {Component, store, location, ...rest} = this.props;
		return <Route {...rest} render={(props) => store.userStore.user ? <Component/> : <Redirect
			to={{
				pathname: "/login",
				state: {from: props.location}
			}}/>
		}/>
	}
}