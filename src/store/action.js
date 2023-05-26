/**
 * 商城Vuex-actions
 */
import axios from "axios";
import {clearSession} from '../utils/sessionUtil.js'
import {queryAllImagePage} from "../api/picApi";
import {queryFriendInIds} from "../api/friends";
export default {
  saveUserName(context,userName){
    context.commit('saveUserName', userName);
  },
  saveUserInfo({commit},user){
    commit('saveUserInfo', user);
  },
  saveCartCount(context, count) {
    context.commit('saveCartCount', count);
  },
  saveAuthorization(context,val){
    context.commit('saveAuthorization',val);
  },
  async saveAddressList(context) {
    try {
      const {data}=await axios.get('/api/address')
      context.commit('saveAddressList', data);
      return true
    }catch (e){
      return false
    }

  }  ,
  async login(context,payload) {
    try {
      const {data}=await axios.post('/api/login',payload)
      context.commit('login', data);
      return true
    }catch (e){
      return false
    }
  }  ,
  async register(context,payload) {
    try {
      const {data}=await axios.post('/api/register',payload)
      return true
    }catch (e){
      return false
    }
  }  ,
   queryAllPicPage(context,payload) {
    try {
       queryAllImagePage(payload).then(resp =>{
         context.commit('savePicArray',resp.records)
       })
      return true
    }catch (e){
      return false
    }
  },
  async updateAddress({dispatch},payload) {
    try {
      const {addressId,data} =payload
      await axios.put('/api/address/'+addressId,data)
      dispatch('saveAddressList')
      return true
    }catch (e){
      return false
    }
  },
  async deleteAddress({dispatch},id) {
    try {
      await axios.delete('/api/address/'+id)
      dispatch('saveAddressList')
      return true
    }catch (e){
      return false
    }
  },
  //images
  async deleteImage(state,id) {
    try {
      await axios.delete('/api/image/'+id)
      return true
    }catch (e){
      return false
    }
  },
  //loginOut
  async loginOut({dispatch}) {
    try {
      await axios.get('/api/logOut')
      clearSession()
      dispatch('saveUserName','');
      dispatch('saveCartCount','0');
      dispatch('saveUserInfo',null);
      return true
    }catch (e){
      return false
    }
  },
  //获取粉丝列表
  async getFanList({dispatch,commit}) {
    try {
      const {data} = await axios.get('/api/friends/fanLists')
      commit('saveFanList',data);
      return true
    }catch (e){
      return false
    }
  },
  //获取关注者列表
  async getFollowList({dispatch,commit}) {
    try {
      const  {data} = await axios.get('/api/friends/followLists')
      commit('saveFollowList',data)
      return true
    }catch (e){
      return false
    }
  },
  //获取用户关注列表和粉丝列表
  async getFanListAndFollowList({dispatch}){
    try {
      dispatch('getFanList')
      dispatch('getFollowList')
      return true
    }catch (e){
      return false
    }
  },
}
