import {connect} from 'react-redux';
import Login from '../../components/user/login';
import * as actions from '../../actions/userActions';
import axios from 'axios';
const mapStateToProps = (store)=>{
	return {
		logging: store.user.logging,
		logInfo: store.user.logInfo
	}
};

const mapDispatchToProps = (dispatch)=>{
	return {
		onlogin: (userName, password)=>{
			dispatch(actions.userLogging());
			axios.post('/api/user/login',{
				name: userName,
				password
			}).then((d)=>{
				dispatch(actions.userLogComplete( d.data.login ? d.data.user : null ));
			})
			
		},
		onMessageShown:()=>{
			dispatch(actions.userLoginMessageShown())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);