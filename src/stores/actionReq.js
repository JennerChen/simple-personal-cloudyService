import axios from 'axios';

class ActionReq {
	/**
	 * @type { AxiosInstance }
	 */
	axios;
	
	constructor() {
		this.axios = axios.create({
			validateStatus:() => true // 不检查所有的 status code
		});
		this.axios.defaults.data = {};// 如果此参数不设置(默认为undefined), 那么axios不会修改 content-type
		this.axios.interceptors.request.use(function (config) {
			NProgress.start();
			return config;
		}, function (error) {
			NProgress.done();
			return Promise.reject(error);
		});
		this.axios.interceptors.response.use(function (response) {
			NProgress.done();
			return response;
		}, function (error) {
			NProgress.done();
			return Promise.reject(error);
		});
	}
}

export default new ActionReq();