<template>
  <div class="taskBox">
    <div class="left">
      <div  class="friendsItem">
        <div class="friendsBox" v-for="(item ,index) in friendsList" @click="changeTarget(item)">
          <div>
            <img :src="item.avatarUrl" :alt="item.username" width="50" height="50" class="image">
          </div>
          <div class="rightBox">
            <div>{{item.username}}</div>
            <div style="white-space: nowrap;overflow: hidden;color: #0f95be;font-size: 0.5em;text-overflow: ellipsis">{{item.info}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="messageBox" v-show="targetUser">
        <span v-for="(item,index) in history[key]" :key="index">{{item}}</span>
      </div>
      <div class="footer" v-show="targetUser">
        <el-input v-model="message" @keydown.enter="send"></el-input>
        <el-button @click="send">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {taskMixins} from "../../../utils/mixins";
import {mapGetters} from "vuex";
import axios from "axios";
import {queryFriendInIds} from "../../../api/friends";

export default {
  name: "task",
  mixins: [taskMixins],
  setup(){
  },
  data() {
    return {
      message: '',
      targetUser:'',
      key:'',
      type:'',
      friendsList:[]
    }
  },
  computed:{
    ...mapGetters(['fanList','user'])
  },
  mounted() {
    this.getFriendList()
  },
  methods: {
    send(){
      this.sendMsg(JSON.stringify({user1:this.user.userId.toString(),type:this.type,user2:this.targetUser.toString(),data:{user:this.user.userId.toString(),msg:this.message,time:new Date().getTime().toString()}}))
    },
    changeTarget(target){
      this.targetUser = target.userId
      this.type = 'UserMessage'
      this.key = "taskID"+this.user.userId+target.userId
      console.log(this.history[this.key])
    },
    getFriendsInfoList(){
      queryFriendInIds(this.fanList).then(resp=>{
        this.friendsList = resp
      })
    },
    async getFriendList(){
      await this.$store.dispatch('getFanList')
      this.getFriendsInfoList()
    }
  }
}
</script>

<style scoped lang="scss">
.taskBox{
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: whitesmoke;
  .left{
    flex: 3;
    border: 1px darkgray solid;
    .friendsItem{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: relative;
      padding: 5px;
      font-size: 1em;
      box-sizing: border-box;
      .friendsBox{
        display: flex;
        background: #ffffff;
        justify-content: space-around;
        align-items: center;
        margin: 5px;
        .image{
          border-radius: 50%;
          object-fit: cover;
        }
        .rightBox{
          cursor: pointer;
          display: flex;
          width: 60%;
          flex-direction: column;
          overflow: hidden;
          word-break: break-word;
        }
      }
    }
  }
  .content{
    position: relative;
    flex: 7;
    border: 1px darkgray solid;
    .messageBox{
      display: flex;
      flex-direction: column;
    }
    .footer{
      display: flex;
      width: 100%;
      position: absolute;
      bottom: 0;
      ::v-deep .el-input__inner{
        width: 70%;
      }
    }
  }
}
</style>
