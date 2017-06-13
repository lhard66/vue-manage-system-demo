import axios from 'axios';
/**
 * @param  {String}	url	请求地址
 * @param  {String}	method  请求方式，默认get
 * @param  {Object} options	其它参数
 * @return {Promise} 
 */
export default (url, data, method = 'GET', options) => {
  let params = {
    url,
    data,
    method,
    responseType: 'json',
  }
  if (options) {
    params = Object.assign(params, options);
  }
  // console.log(params);
  return axios(params);
}
