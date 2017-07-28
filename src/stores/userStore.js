import {observable, computed, action} from 'mobx'
import { message } from 'antd';

class UserStore {
	
	@observable
	displayFormName = "login";
	
	@observable
	rememberMe = true;
	@observable
	isSigning = false;
	
	@observable
	loginForm = {
		username: 'admin',
		password: ''
	};
	
	constructor(root) {
		this.rootStore = root;
	}
	
	@computed
	get enableLoginBtn() {
		return this.loginForm.username.length >= 5 && this.loginForm.password.length >= 3;
	}
	
	showSignupForm = () => {
		this.displayFormName = "signup";
	};
	
	showLoginForm = () => {
		this.displayFormName = "login"
	};
	
	toggleRememberMe = () => {
		this.rememberMe = !this.rememberMe;
	};
	
	@action
	login = () => {
		if (!this.enableLoginBtn) return;
		this.isSigning = true;
		this.rootStore.actionReq.axios.post("/user/login", {
			username: this.loginForm.username,
			password: this.loginForm.password,
			rememberMe: this.rememberMe
		}).then(action("getLoginInfo", (res) => {
			this.isSigning = false;
			message.error('账号或者密码错误！');
			console.log(res.data);
		}))
	}
}

export default UserStore;