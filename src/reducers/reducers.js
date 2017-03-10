import {combineReducers} from 'redux';
import user from './userReducer';
import fileList from './cloudDisk/fileListReducer';
export  default  combineReducers({
	user,
	fileList
});