import axios from "axios";
import {ElMessage} from 'element-plus'
import {clearSession, removeSessionItem, getSession} from '../sessionUtil.js'
import {loadTemplate} from "../baseUtil";

axios.defaults.timeout = 8000;

// axios.defaults.baseURL='/api'
//拦截器
axios.interceptors.response.use(function (response) {
    let res = response.data;
    let path = location.hash;
    if (res.code == 200 || res.code == 201) {
        return res;
    } else if (res.code == 401) {
        if (path != '#/index') {
            window.location.href = '/#/login';
        }
        removeSessionItem("Authorization");
        ElMessage.warning(res.message);
        return Promise.reject(res);
    } else {
        // this.$message.warning(res.message);
        ElMessage.warning(res.message);
        return Promise.reject(res);
    }
}, (error) => {
    let res = error.response;
    let path = location.hash;
    if (res.data.code === 1000) {
        ElMessage.error(res.data.message);
    } else if (res.data.code === 403) {
        if (path != '#/index') {
            window.location.href = '/#/pages/login';
        }
        clearSession()
        ElMessage.error(res.data.message);
    } else {
        ElMessage.error(res.data.message);
    }
    return Promise.reject(error);
});
axios.interceptors.request.use((request) => {
    let token = getSession('Authorization')
    if (token != null && token.length > 10) {
        token = "Bearer " + token;
        request.headers.Authorization = token;
    }
    return request;
},()=>{

});

export default axios
