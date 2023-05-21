/**
 * 商城Vuex-actions
 */
export default {
    user:state=>state.user||{},
    username:state=>state.username||{},
    isLogin:state=>state.isLogin||{},
    role:state=>state.role||{},
    Authorization:state=>state.Authorization||{},
    picArray:state=>state.picArray||{},
    picInfoArray:state=>state.picInfoArray||{},
    fanList:state=>state.fanList||{},
    followList:state=>state.followList||{},
}
