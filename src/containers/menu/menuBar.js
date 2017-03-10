import {connect} from 'react-redux';
import MenuBar from '../../components/menu/menuBar';

const mapStateToProps = (store) => {
	return {
		user: store.user.user
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		signOut(){
			
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);


