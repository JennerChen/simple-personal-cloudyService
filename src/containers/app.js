import App from '../components/app';
import { connect } from 'react-redux';

const mapStateToProps = (store)=>{
	return {
		user: store.user.user
	}
};

const appContainer = connect(mapStateToProps)(App);
export default appContainer;