import {getSession} from '../sessionUtil'
import {ElMessage} from "element-plus";
export const taskMixins = {
    data() {
        return {
            history:{},
            path:"ws://localhost:8080/limi/task",
            socket:""
        }
    },
    mounted() {
      this.init()
    },
    methods: {
        init () {
            if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                const user = getSession('user')
                if (!user){
                    ElMessage.warning('请先登录后重试')
                    this.$router.push('/pages/login')
                } else {
                    // 实例化socket
                    let data  = JSON.parse(user)
                    this.socket = new WebSocket(this.path+'/'+data.userId)
                    // 监听socket连接
                    this.socket.onopen = this.open
                    // 监听socket错误信息
                    this.socket.onerror = this.error
                    // 监听socket消息
                    this.socket.onmessage = this.getMessage
                }
            }
        },
        open () {
            console.log("socket连接成功")
        },
        error () {
            console.log("连接错误")
        },
        getMessage (msg) {
            let data = JSON.parse(msg.data)
            this.history = {...data}
        },
        close () {
            console.log("socket已经关闭")
        },
        sendMsg(msg){
            this.socket.send(msg)
        }
    },
    destroyed () {
        // 销毁监听
        this.socket.onclose = this.close
    }
}

