import React from "react";
import Radium from 'radium';
import Overlay from 'material-ui/internal/Overlay';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';
const style = {
	base: {
		zIndex: 1500,
		position: 'relative',
		width: '300px',
		margin: '0 auto',
		top: '200px',
		padding: "20px 35px"
	},
	username: {
		hint: {
			fontSize: "12px"
		},
		floatingLabel: {
			fontSize: "20px"
		}
	},
	password: {
		floatingLabel: {
			fontSize: "20px"
		}
	},
	loginWrap: {
		width: "100%",
		textAlign: "center",
		position: 'relative'
	},
	loading: {
		position: 'absolute',
		top: '6px',
		marginLeft: '10px'
	},
	logFail:{
		color:'red'
	},
	warning: {
		color: '#ff770e',
		':hover': {
			color: '#333'
		}
	}
};
@Radium
class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			password: '',
			userRequireMessage: '',
			passwordReportMessage: ''
		};
		this.validateUserName = this.validateUserName.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
	}
	
	validateUserName(event) {
		this.setState({
			userName: event.target.value
		});
	}
	
	validatePassword(event) {
		this.setState({
			password: event.target.value
		})
	}
	
	login() {
		let flag = true;
		if (this.state.userName.trim().length === 0) {
			this.setState({
				userRequireMessage: "用户名必须存在"
			});
			flag = false;
		}
		if (this.state.password.trim().length === 0) {
			this.setState({
				passwordReportMessage: "密码必须存在"
			});
			flag = false;
		}
		if (flag) {
			this.props.onlogin(this.state.userName, this.state.password);
		}
	}
	render() {
		const {userName, password, userRequireMessage, passwordReportMessage} = this.state;
		const {logging,logInfo, onMessageShown } = this.props;
		return <div>
			<Paper style={ style.base } zDepth={1}>
				<TextField
					hintText="请填入从管理员中获取的账号名"
					floatingLabelText="账号:"
					onChange={ this.validateUserName }
					value={userName }
					hintStyle={ style.username.hint }
					floatingLabelStyle={ style.username.floatingLabel }
					floatingLabelFixed={ true }
					fullWidth={true}
					errorText={userRequireMessage}
				/><br/>
				<TextField
					floatingLabelText="密码:"
					type="password"
					floatingLabelFixed={ true }
					fullWidth={true}
					floatingLabelStyle={ style.password.floatingLabel }
					onChange={ this.validatePassword }
					value={ password }
					errorText={passwordReportMessage}
				/><br />
				<div style={ style.loginWrap }>
					<RaisedButton
						label="登 录"
						labelPosition="before"
						primary={true}
						onClick={this.login.bind(this) }
						disabled={ logging }
					/>
					{ logging ? (
							<CircularProgress size={ 20 } style={ style.loading }/>
						) : null }
				</div>
				<Snackbar
					open={ !!logInfo }
					message= { logInfo ? logInfo : '' }
					autoHideDuration={4000}
					contentStyle={ style.logFail }
					onRequestClose={ onMessageShown }
				/>
			</Paper>
			<Overlay show={ true }/>
		</div>
	}
}
@Radium
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
		
	}
	
	renderLayer() {
		return <LoginForm { ...this.props } />
	}
	render() {
		return <RenderToLayer render={ this.renderLayer.bind(this) } open={ true } useLayerForClickAway={ false }/>
	}
}

export default Login;