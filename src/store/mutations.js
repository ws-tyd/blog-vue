/**
 * 商城Vuex-mutations
 */
import {setSession} from '../utils/sessionUtil.js'

export default {
    saveUserName(state, userName) {
        setSession("username", userName);
        state.username = userName;
    },
    saveUserInfo(state, user) {
        setSession("user", JSON.stringify(user))
        state.user = user;
    },
    saveRole(state, role) {
        setSession("role", role)
        state.role = role;
    },
    login(state, data) {
        state.role = data.user.role;
        state.isLogin = true
        state.Authorization = data.token
        this.commit('saveUserInfo',data.user)
        setSession("role", data.user.role)
        setSession("Authorization", data.token)
    },
    savePicArray(state, data) {
        state.picArray = []
        data.forEach(item=>{
            state.picArray.push(item.picUrl);
        })
        state.picInfoArray = data
    },
    setSlideVerifyArray(state, data) {
        state.slideVerifyArray = []
        data.forEach(item=>{
            state.slideVerifyArray.push(item.picUrl);
        })
        state.slideVerifyArrayInfo = data
    },
    saveAuthorization(state, val) {
        setSession("Authorization", val)
        state.Authorization = val;
    },
    saveFanList(state, val) {
        setSession("fanList", val)
        state.fanList = val;
    },
    saveFollowList(state, val) {
        setSession("FollowList", val)
        state.followList = val;
    }
}
