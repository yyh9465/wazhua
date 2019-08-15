/**
 * @file utils
 * @author yaoyanhui
 */

/**
 * @desc 网络请求封装，项目内请走这个封装
 * @param {object}[params]-发请求用的参数
 * @return {object}请求的Promise任务对象
 */
export const request = params => {

	let requestParams = {
		...params,
		method: (params.method && params.method.toUpperCase()) || 'GET'
};
	return fetch(
		requestParams.url,
		requestParams
	).then(res=>res.json());
}