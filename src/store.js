
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
const appStore = createStore(reducers,applyMiddleware(thunk, logger()));
export default appStore;