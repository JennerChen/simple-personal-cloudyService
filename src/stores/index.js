import actionReq from './actionReq';
import UserStore from './userStore';
class RootStore {
	constructor(){
		this.userStore = new UserStore(this);
		this.actionReq = actionReq;
	}
}

export default new RootStore()