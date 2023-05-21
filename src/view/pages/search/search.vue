<template>
  <div class="searchPage">
    <div class="searchHead">
      <div class="searchBox">
        <el-input type="text" v-model="key" placeholder="请输入你要搜索的关键词" @keydown.enter="searchKey()">
          <template #suffix>
            <el-icon @click="searchKey()">
              <Search/>
            </el-icon>
          </template>
        </el-input>
      </div>
    </div>
    <div class="searchTags">

    </div>
    <div class="searchResult">

      <div v-if="result.length===0" style="display: flex;width: 100%;height: 100%">
        <el-empty style="margin: auto" :image-size="200"  description="找不到相关信息" class="--el-empty-fill-color-3"/>
      </div>
      <div v-for="(item,index) in result" :key="index" class="resultItem">
        <img :src="item.avatarUrl" :alt="item.username" width="80" height="80" class="image">
        <div class="rightBox">
          <span>{{item.username}}</span>
          <span @click="addFriends(item)" v-if="isFriends(item.id)">关注</span>
          <span  v-else @click="cancelFriends(item)">已关注</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {searchUser} from "../../../api/searchApi";
import {queryAvatarById} from "../../../api/picApi";
import {addFriends, cancelFriends, isConcernMe} from "../../../api/friends";
import {ElMessage} from "element-plus";
import {mapGetters} from "vuex";
import {getCurrentInstance} from "vue";

export default {
  name: "search",
  data() {
    return {
      key: '',
      result: []
    }
  },
  mounted() {
    this.getFanAndFollowList()
  },
  setup(){
    const  { proxy, ctx } = getCurrentInstance()
    const  isFriends =  (id)=>{
      let msg = true
      if (ctx.followList.indexOf(id)!==-1){
        msg = false
      }
      return msg
    }
    return{
      isFriends
    }
  },
  computed:{
    ...mapGetters(['fanList','followList'])
  },
  methods: {
    getFanAndFollowList(){
      this.$store.dispatch('updateFanAndFollowList')
    },
    searchKey() {
      searchUser({key: this.key}).then(resp => {
        this.result = resp
      })
    },
    addFriends(user){
      addFriends({id:user.id}).then(resp=>{
        this.getFanAndFollowList()
        ElMessage.success('关注成功')
      })
    },
    cancelFriends(user){
      cancelFriends({id:user.id}).then(resp=>{
        this.getFanAndFollowList()
        ElMessage.success('取消关注成功')
      })
    },
    getAvatar(id){
      let avatar = ''
      queryAvatarById(id).then(resp=>{
        avatar = resp
      })
      return avatar.picUrl
    }
  }
}
</script>

<style scoped lang="scss">
.searchPage{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  .searchHead{
    width: 60%;
    padding: 10px;
    box-sizing: border-box;
    .searchBox{

    }
  }
  .searchTags{

  }
  .searchResult{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    .resultItem{
      display: flex;
      background: whitesmoke;
      width: 30%;
      align-items: center;
      justify-content: space-evenly;
      padding: 5px 10px;
      box-sizing: border-box;
      margin: 10px;
      .image{
        border-radius: 50%;
        object-fit: cover;
      }
      .rightBox{
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        span{
          width: 100px;
          line-height: 40px;
          cursor: pointer;
          &:nth-child(1){
            background: #16b5e5;
          }
          &:nth-child(2){
            background: red;
          }
        }
      }
    }
  }

}
</style>