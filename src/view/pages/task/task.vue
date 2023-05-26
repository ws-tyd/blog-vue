<template>
  <div class="taskBox">
    <div class="left">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template #title>
            <span style="text-align: center;width: 50%">关注列表</span>
          </template>
          <div class="friendsItem">
            <div class="friendsBox" v-for="(item ,index) in this.fanList" @click="changeTarget(item)">
              <div>
                <img :src="item.avatarUrl" :alt="item.username" width="50" height="50" class="image">
              </div>
              <div class="rightBox">
                <div>{{ item.username }}</div>
                <div
                    style="white-space: nowrap;overflow: hidden;color: #0f95be;font-size: 0.5em;text-overflow: ellipsis">
                  {{ item.info }}
                </div>
              </div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <span style="text-align: center;width: 50%">粉丝列表</span>
          </template>
          <div class="friendsItem">
            <div class="friendsBox" v-for="(item ,index) in this.followList" @click="changeTarget(item)">
              <div>
                <img :src="item.avatarUrl" :alt="item.username" width="50" height="50" class="image">
              </div>
              <div class="rightBox">
                <div>{{ item.username }}</div>
                <div
                    style="white-space: nowrap;overflow: hidden;color: #0f95be;font-size: 0.5em;text-overflow: ellipsis">
                  {{ item.info }}
                </div>
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="content">
      <div class="messageBox" v-show="targetUser" id="messageBox">
        <span v-for="(item,index) in taskHistory[key]" :key="index">
          <div class="otherInfoBox" v-if="user.userId!==JSON.parse(item).user">
               <div class="avatar">
                <img :src="otherAvatarUrl" :alt="item.username" width="50" height="50" class="image">
              </div>
              <div class="infoBox">
                <spam>{{ JSON.parse(item).msg }}</spam>
              </div>
          </div>
          <div class="myInfoBox" v-else>
                 <div class="infoBox">
                <spam>{{ JSON.parse(item).msg }}</spam>
              </div>
                 <div class="avatar">
                <img :src="this.user.avatarUrl" :alt="item.username" width="50" height="50" class="image">
              </div>
          </div>
        </span>
      </div>
      <div class="footer" v-show="targetUser">
        <el-input :rows="2" type="textarea" v-model="message" show-word-limit maxlength="2000" @keydown.ctrl.enter="send"></el-input>
        <el-button @click="send">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {taskMixins} from "../../../utils/mixins";
import {mapGetters} from "vuex";
import axios from "axios";
import {getMessageSessionID, queryFriendInIds} from "../../../api/friends";

export default {
  name: "task",
  setup() {
  },
  data() {
    return {
      message: '',
      otherAvatarUrl: '',
      activeNames: '1',
      history:{},
      targetUser: '',
      key: '',
      type: '',
    }
  },
  computed: {
    ...mapGetters(['fanList', 'user', 'followList',"taskHistory"])
  },
  mounted() {
    this.getFriendList()
  },
  methods: {
    async send() {
      await this.webSocket.ws.send(JSON.stringify({
        user1: this.user.userId, type: this.type, user2: this.targetUser,
        data: {user: this.user.userId, msg: this.message, time: new Date().getTime().toString(), status: 0}
      }))
      this.message = ''
      this.updateMessage(this.targetUser)
    },
    handleChange(val) {
    },
    async changeTarget(target) {
      this.targetUser = target.userId
      this.otherAvatarUrl = target.avatarUrl
      this.type = 'UserMessage'
      await this.updateMessage(target.userId)
    },
    updateMessage(target) {
      this.key = "taskID" + this.user.userId + target
      let messageBox = document.getElementById('messageBox')
      messageBox.scrollTop = messageBox.scrollHeight
    },
    async getFriendList() {
      await this.$store.dispatch('getFanListAndFollowList')
    }
  }
}
</script>

<style scoped lang="scss">
.taskBox {
  display: flex;
  width: 100%;
  height: 600px;
  padding: 20px;
  box-sizing: border-box;
  background-color: whitesmoke;

  .left {
    flex: 3;
    border: 1px darkgray solid;

    .friendsItem {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: relative;
      padding: 5px;
      font-size: 1em;
      box-sizing: border-box;
      overflow-y: auto;
      .friendsBox {
        display: flex;
        background: #ffffff;
        justify-content: space-around;
        align-items: center;
        margin: 5px;

        .image {
          border-radius: 50%;
          object-fit: cover;
        }

        .rightBox {
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

  .content {
    position: relative;
    flex: 7;
    border: 1px darkgray solid;
    width: 100%;
    height: 100%;
    .messageBox {
      width: 100%;
      height: 92%;
      min-height: 92%;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      .otherInfoBox {
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 5px;
        .avatar{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
        }
        .infoBox{
          display: block;
          max-width: 30%;
          min-width: 100px;
          word-break: break-all;
          background: #16b5e5;
          padding: 5px;
          box-sizing: border-box;
          margin-left:10px;
          box-shadow: #0f95be 0 0 5px 2px ;
        }
      }

      .myInfoBox {
        display: flex;
        justify-content: right;
        align-items: center;
        margin: 5px;
        .avatar{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
        }
        .infoBox{
          display: block;
          max-width: 30%;
          min-width: 100px;
          word-break:break-all;
          background: #16b5e5;
          padding: 5px;
          box-sizing: border-box;
          margin-right:10px;
          box-shadow: #0f95be 0 0 5px 2px ;
        }
      }
    }

    .footer {
      display: flex;
      width: 100%;
      position: absolute;
      bottom:0;
      ::v-deep .el-input__inner {
        width: 70%;
      }
    }
  }
}
</style>
