import React from 'react';
import styled, {keyframes} from 'styled-components';
import { CSSTransitionGroup, TransitionGroup  } from 'react-transition-group'

const rotate360 = keyframes`
	0%{
		transform: rotateY(0);
	}
	
	50%{
		transform:rotateY(180deg)
	}
	
	100%{
		transform:rotateY(360deg)
	}
	
`;
const LoginWrap = styled.div`
    width: 100%;
    max-width: 525px;
    min-height: 670px;
    position: relative;
    background: url(/img/loginBg.jpg) no-repeat center;
    box-shadow: 0 12px 15px 0 rgba(0,0,0,.24), 0 17px 50px 0 rgba(0,0,0,.19);
    transform: translate(-50%,-50%);
    position: fixed;
    left: 50%;
    top: 50%;
`;

const LoginSelection = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 90px 70px 50px 70px;
    background: rgba(40,57,101,.9);
`;

const SelectionLabel = styled.div`
	font-size: 22px;
    margin-right: 15px;
    padding-bottom: 5px;
    margin: 0 15px 10px 0;
    display: inline-block;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    text-transform: uppercase;
    color: #6a6f8c;
    transition:all .5s;
    &.active{
        color: #fff;
        border-color: #1161ee;
    }
`;

const LoginForm = styled.div`
    min-height: 345px;
    position: relative;
`;

const FormLabel = styled.span`
    color: #aaa;
    font-size: 12px;
    display: block;
    width: 100%;
    line-height: 25px;
    letter-spacing: 5px;
`;

const FormInput = styled.input`
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background-color: rgba(255,255,255,.1);
    outline:none;
    width: 100%;
    color: #fff;
    display: block;
    transition: border-color .3s;
    border: 2px solid transparent;
    &:focus{
        border: 2px solid #1161ee;
    }
    
`;

const RememberMeIcon = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 2px;
    position: relative;
    display: inline-block;
    background-color: ${ props => props.rememberMe ? "#1161ee" : "rgba(255,255,255,.1)"};
    top:2px;
    transition: background-color .2s;
    &:before{
        content: '';
	    width: 10px;
	    height: 2px;
	    background-color: #fff;
	    position: absolute;
	    transition: all .2s ease-in-out 0s;
	    left: 3px;
	    width: 5px;
	    bottom: 6px;
	    transform: ${ props => props.rememberMe ? "scale(1) rotate(45deg)" : "scale(0) rotate(0)"};
    }
    
    &:after{
        top: 6px;
        right: 0;
        content: '';
	    width: 10px;
	    height: 2px;
	    background: #fff;
	    position: absolute;
	    transition: all .2s ease-in-out 0s;
	    transform: ${ props => props.rememberMe ? "scale(1) rotate(-45deg)" : "scale(0) rotate(0)"};
    }
`;

const RememberMeSpan = styled.span`
	color: ${ props => props.rememberMe ? '#fff' : '#aaa' };
	font-weight:${ props => props.rememberMe ? 'bold' : 'normal' };
	transition: color .3s;
	margin-left:5px;
	letter-spacing:2px;
`;

const LoginBtn = styled.button`
	background: ${ props => props.active ? "#1161ee" : "rgba(255,255,255,.1)"};
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    width: 100%;
    color: #fff;
    display: block;
    outline:none;
`;
class LoginModal extends React.Component{
	
	state = {
		rememberMe: true
	};
	
	render(){
		const { rememberMe } = this.state;
		return <LoginForm>
			<FormLabel>用户名</FormLabel>
			<FormInput type="text" />
			
			<FormLabel>密码</FormLabel>
			<FormInput type="password"/>
			
			
			<label
				onClick={ ()=>this.setState({
					rememberMe: !rememberMe
				})  }
				style={ {
					lineHeight:"45px"
				} }
			>
				<RememberMeIcon rememberMe={ rememberMe }/>
				<RememberMeSpan rememberMe={ rememberMe }>保持登录</RememberMeSpan>
			</label>
			
			<LoginBtn>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</LoginBtn>
			<hr style={ { height:2,margin:"60px 0 50px 0",backgroundColor:'rgba(255,255,255,.2)', border:'none'} }/>
		</LoginForm>
	}
}

class SignupModal extends React.Component{
	render(){
		return <LoginForm>
			<FormLabel>用户名</FormLabel>
			<FormInput type="text" />
			
			<FormLabel>密码</FormLabel>
			<FormInput type="password"/>
			
			<FormLabel>重复密码</FormLabel>
			<FormInput type="password" style={ {marginBottom:25} }/>
			
			<LoginBtn>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</LoginBtn>
			<hr style={ { height:2,margin:"60px 0 50px 0",backgroundColor:'rgba(255,255,255,.2)', border:'none'} }/>
		</LoginForm>
	}
}

export default class Login extends React.Component {
	state = {
		rotating: false,
		isSignin: true,
		
	};
	
	constructor(props) {
		super(props);
	}
	
	animateForm(){
	
	}
	
// 	rotateY(180deg)
	render() {
		const {  isSignin, rotating } = this.state;
		return <LoginWrap>
			<LoginSelection>
				<SelectionLabel
					className={isSignin ? 'active' : ''}
					onClick={() => this.setState({
						isSignin: true
					})}
				>登&nbsp;&nbsp;&nbsp;&nbsp;录</SelectionLabel>
				<SelectionLabel
					className={!isSignin ? 'active' : ''}
					onClick={() => this.setState({
						isSignin: false
					})}
				>注&nbsp;&nbsp;&nbsp;&nbsp;册</SelectionLabel>
				<CSSTransitionGroup
					transitionName={ {
						enter: rotate360,
						enterActive: rotate360,
						leave: rotate360,
						leaveActive: rotate360,
						appear: rotate360,
						appearActive: rotate360
					} }
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}
					
				>
					{ isSignin ? <LoginModal/> :  <SignupModal/> }
				</CSSTransitionGroup>
				
				
			</LoginSelection>
		</LoginWrap>
	}
}