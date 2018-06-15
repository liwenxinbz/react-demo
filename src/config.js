import axios from 'axios';
import {Toast} from 'antd-mobile';


//拦截请求；

axios.interceptors.request.use(function (config) {
    Toast.loading('加载中', 0);
    console.log(config, 'request');
    return config;
});

//拦截响应
axios.interceptors.response.use(function (config) {
    console.log(config, 'response');
    Toast.hide();
    return config;
});
