<template>
  <div id="register" class="register_body">
    <!--    <div id="register_pic" class="register_pic">-->
    <Transition name="bounce" >
      <SlideVerify @checked="testing" v-if="showCheck"></SlideVerify>
    </Transition>
    <!--    </div>-->
    <form class="form_register">
      <div class="form_item">
        <input type="text" class="form_input" required v-model="user.username" >
        <span class="form_label">用户名</span>
      </div>
      <div class="form_item">
        <input type="password" class="form_input" required id="pwd" v-model="user.password">
        <span class="form_label">密码</span>
      </div>
      <div class="form_item">
        <input type="password" class="form_input" required id="rePwd" v-model="user.rePassword">
        <span class="form_label">确认密码</span>
      </div>
      <div class="form_item">
        <div style="display: flex;flex: 1;position: relative">
          <input type="checkbox" class="form_checkbox" v-model="termsOfService">
          <span class="form_label" style="left: 0">服务条款</span>
        </div>
        <div style="display: flex;flex: 1;position: relative">
          <input type="checkbox" class="form_checkbox" v-model="pwdShow" @click="showPwd">
          <span class="form_label" style="left: 0">显示密码</span>
        </div>
      </div>

      <div class="form_item_btn">
        <button id="dl" class="form_btn" type="button" @click="login" >去登录</button>
        <button id="zc" class="form_btn" type="button" @click="checked">注册</button>
      </div>
    </form>

  </div>
</template>

<script>
import SlideVerify from "../../../components/slide-verify/slideVerify.vue";
import {ElMessage} from "element-plus";
import {isBlank} from "../../../utils/verification";

export default {
  name: "register",
  components: { SlideVerify},
  data() {
    return {
      user: {
        username: null,
        rePassword: null,
        password: null
      },
      pwdShow:false,
      showCheck:false,
      termsOfService: true,
      verification: false
    }
  },
  mounted() {
  },
  methods: {
    checked(){
      this.showCheck = true
    },
    showPwd(){
      this.pwdShow = !this.pwdShow
      let pwd = document.getElementById('pwd')
      let rePwd = document.getElementById('rePwd')
      this.pwdShow?pwd.type = 'text':pwd.type = 'password'
      this.pwdShow?rePwd.type = 'text':rePwd.type = 'password'
    },
    register() {
      const {flag, msg} = this.registerCheck()
      if (flag) {
        if (this.$store.dispatch('register', this.user)) {
          ElMessage({
            type: "success",
            message: "注册成功",
            offset: 50
          })
          this.$router.push('login')
        }
      } else {
        ElMessage({
          type: "info",
          message: msg,
          offset: 50
        })
      }
      this.showCheck = false
    },
    login(){
      this.$router.push('login')
    },
    registerCheck() {
      let msg = {}
      if (!this.verification) {
        msg = {flag: false, msg: "请先通过滑动验证"};
      }else if (isBlank(this.user.username)) {
        msg = {flag: false, msg: "请输入账号名"};
      }else if (isBlank(this.user.password)) {
        msg = {flag: false, msg: "请输入密码"};
      }else if(this.user.password!==this.user.rePassword){
        msg = {flag: false, msg: "两次密码不一致"};
      }else {
        msg = {flag: true, msg: "验证成功"};
      }
      return msg
    },
    testing(val) {
      this.verification = val
      this.register()
    }
  }
}
</script>

<style scoped>
.register_body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.form_register {
  display: flex;
  margin: auto;
  width: 35%;
  flex-direction: column;
  justify-content: center;
}

.form_item {
  display: flex;
  line-height: 45px;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between;
  margin: 10px 0px 10px;
  border-radius: 20px;
  border: transparent;
}

.form_label {
  user-select: none;
  display: inline;
  width: 100%;
  line-height: inherit;
  text-align: left;
  font-weight: bold;
  position: absolute;
  padding: 3px;
  left: -20%;
  box-sizing: border-box;
  pointer-events: none;
  transition: all ease-in-out 1s;
}

.form_input {
  line-height: inherit;
  width: 100%;
  height: 45px;
  font-size: 25px;
  padding: 3px;
  box-sizing: border-box;
  border-radius: 15px;
  border: #16b5e5 1px solid;
  outline: transparent 1px solid;
}

.form_item_btn {
  display: flex;
  line-height: 45px;
  width: 100%;
  height: 45px;
  position: relative;
  justify-content: center;
  margin: 10px 0px 10px;
  border-radius: 20px;
  box-sizing: border-box;
  border: transparent;
}

.form_btn {
  line-height: inherit;
  font-weight: bold;
  width: 50%;
  position: relative;
  overflow: hidden;
  outline: transparent 1px solid;
  z-index: 999;
  transition: width ease-in-out .5s;
}

.form_btn:nth-child(1) {
  border: #d92424 0px solid;
  background-color: #d92424;
}

.form_btn:nth-child(2) {
  border: #119de4 0px solid;
  background-color: #119de4;
}

.form_btn:hover {
  width: 100%;
}

.form_checkbox {
  position: relative;
  left: 5rem;
  top: 1rem;
}

.form_input:focus {
  border: #16b5e5 1px solid;
  outline: #16b5e5 1px solid;
}

.form_input:focus + .form_label, .form_input:valid + .form_label {
  transform: translateX(100%);
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>
