
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';

const middlewareArr = [thunk];
if (process.env.NODE_ENV !== "production" ){
	middlewareArr.push(logger());
}

const appStore = createStore(reducers,applyMiddleware.apply(null, middlewareArr));
export default appStore;