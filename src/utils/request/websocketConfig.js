// global.js 文件
export default {
    path:'ws://localhost:8080/limi/task',
    ws: {},
    setWs: function(newWs) {
        this.ws = newWs
    }
}
