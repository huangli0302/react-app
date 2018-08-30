/**
 * 全局配置文件
 */
let baseURL; 
let imgUrl = '';
if(process.env.NODE_ENV === 'development'){
  baseURL = '';
}else{
  baseURL = '';
}


export default {imgUrl, baseURL}