import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './action'
import getters from './getter'

const state = {
    user: {
        id: '',
        userId: '',
        username: '',
        nickname: '',
        email: '',
        phone: '',
        sex: '',
        role: '',
        createTime: ''
    },
    fanList: [],
    followList: [],
    username: '',
    isLogin: false,//登录用0
    role: '',
    Authorization: '',
    picArray: [],
    picInfoArray: [],
    slideVerifyArray: [],//验证用的图片
    slideVerifyArrayInfo: [],//验证用的图片
    taskHistory: {},//聊天记录
}
export default createStore({
    state,
    mutations,
    actions,
    getters,
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })]
});

