<template>
  <NavHead></NavHead>
  <router-view></router-view>
  <loading id="load" style="display: none"></loading>
</template>
<script>

import Index from "./view/index.vue";
import NavHead from "./components/nav/nav-head.vue";
import Loading from "./components/loading/loading.vue";
import {mapMutations, mapState} from "vuex";
import {taskMixins} from './utils/mixins/index'
import {getSession} from "./utils/sessionUtil";
import {ElMessage} from "element-plus";
export default {
  name: 'App',
  // mixins: [taskMixins],
  data(){
    return{
      pageVo:{
        current: 1,
        desc: null,
        size: 50
      }
    }
  },
  created() {
    this.initWebSocket()
  },
  components: {NavHead, Index,Loading},
  mounted() {
    this.getPic()
  },
  methods:{
    ...mapMutations(['saveTaskHistory']),
    initWebSocket(){
      let that = this
      if(typeof(WebSocket) === "undefined"){
        alert("您的浏览器不支持socket")
      }else {
        const user = getSession('user')
        if (!user) {
          ElMessage.warning('请先登录后重试')
          this.$router.push('/pages/login')
        } else {
          let data = JSON.parse(user)
          // 实例化socket
          that.ws = new WebSocket(that.webSocket.path +"/"+ data.userId);
          that.webSocket.setWs(that.ws);
          that.ws.onopen = function () {
            console.log('websocket连接成功');
          };
          that.ws.onclose = function () {
            // 关闭 websocket
            console.log("连接已关闭...");
            //断线重新连接
            setTimeout(() => {
              that.initWebSocket();
            }, 2000);
          }
          that.ws.onmessage = (msg)=>{
            that.saveTaskHistory(JSON.parse(msg.data))
          }
        }
      }
    },
    getPic(){
      if (this.picArray.length==0){
        this.$store.dispatch('queryAllPicPage',this.pageVo)
      }
    }
  },
  computed:{
    ...mapState(['picArray'])
  }
}
</script>
