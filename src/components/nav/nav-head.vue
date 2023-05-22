<template>
  <div>
    <div id="scroll_progress_bar" class="scroll_progress_bar"></div>
    <div id="navHead" class="nav-head">
      <div class="half_nav">
        <span class="ico" @click="routerChange('/')"></span>
        <span class="title" @click="routerChange('/')">言覃小站</span>
      </div>
      <div class="half_nav">
<!--        首页-->
        <span class="menu_item" @click="routerChange('/',0)" :class="{active:activeItem==0}">
          <span class="item_ico">
            <svg t="1665150858796" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10234" width="32" height="32"><path d="M555.541333 117.994667l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H640V746.666667c0-70.688-57.312-128-128-128s-128 57.312-128 128v170.666666H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0z" p-id="10235" fill="#707070"></path></svg>
          </span>
          <span style="line-height: 70px;font-size: 20px;font-weight: bold">首页</span>
        </span>
        <!--标签-->
        <span class="menu_item" @click="routerChange('/',1)" :class="{active:activeItem==1}">
          <span class="item_ico">
            <svg t="1665151647187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11299" width="32" height="32"><path d="M883.626667 145.493333l-5.12-5.12a44.8 44.8 0 0 0-30.293334-12.373333h-339.2a85.333333 85.333333 0 0 0-60.586666 25.173333l-308.053334 308.053334a42.666667 42.666667 0 0 0 0 60.16l362.24 362.24a42.666667 42.666667 0 0 0 60.16 0l308.053334-308.053334a85.333333 85.333333 0 0 0 25.173333-60.586666V175.786667a44.8 44.8 0 0 0-12.373333-30.293334zM682.666667 426.666667a85.333333 85.333333 0 1 1 85.333333-85.333334 85.333333 85.333333 0 0 1-85.333333 85.333334z" p-id="11300" fill="#8a8a8a"></path></svg>
          </span>
          <span style="line-height: 70px;font-size: 20px;font-weight: bold">标签</span>
        </span>
        <!--分类-->
        <span class="menu_item" @click="routerChange('/',2)" :class="{active:activeItem==2}">
          <span class="item_ico">
            <svg t="1665151758200" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12407" width="32" height="32"><path d="M278.15 192.43h129.47a80 80 0 0 1 80 80v209.88H278.15a80 80 0 0 1-80-80V272.43a80 80 0 0 1 80-80zM752.31 482.31H542.84V272.43a80 80 0 0 1 80-80h129.47a80 80 0 0 1 80 80v129.88a80 80 0 0 1-80 80zM752.31 828.53H622.84a80 80 0 0 1-80-80V538.65h209.47a80 80 0 0 1 80 80v129.88a80 80 0 0 1-80 80zM278.15 538.64h209.47v209.88a80 80 0 0 1-80 80H278.15a80 80 0 0 1-80-80V618.64a80 80 0 0 1 80-80z" fill="#707070" p-id="12408"></path></svg>
          </span>
          <span style="line-height: 70px;font-size: 20px;font-weight: bold">分类</span>
        </span>
        <!--关于-->
        <span class="menu_item" @click="routerChange('/',3)" :class="{active:activeItem==3}">
          <span class="item_ico">
            <svg t="1665151810752" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13493" width="32" height="32"><path d="M512 992C246.912 992 32 777.088 32 512 32 246.912 246.912 32 512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480z m-59.072-512v236.32a54.144 54.144 0 1 0 108.288 0V480a54.144 54.144 0 1 0-108.288 0z m53.76-226.464c-14.72 0-27.232 4.544-37.568 15.136-11.04 9.856-16.192 22.72-16.192 38.656 0 15.136 5.152 28 16.192 38.624 10.336 10.592 22.848 15.904 37.6 15.904a57.6 57.6 0 0 0 39.04-15.168c10.304-10.592 15.456-23.456 15.456-39.36s-5.12-28.8-15.456-38.656c-10.304-10.56-23.584-15.136-39.04-15.136z" p-id="13494" fill="#707070"></path></svg>
          </span>
          <span style="line-height: 70px;font-size: 20px;font-weight: bold">关于</span>
        </span>
        <!--搜索-->
        <span class="menu_item" @click="routerChange('/pages/search',4)" :class="{active:activeItem==4}">
          <span class="item_ico">
            <svg t="1665152270578" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14565" width="32" height="32"><path d="M912.072815 946.738335c-4.78498 0-9.56996-1.824555-13.220093-5.475711L650.662083 693.076078c-0.285502-0.285502-0.561795-0.579191-0.827855-0.883113l-6.979972-7.948019c-6.671956-7.594979-6.096858-19.11843 1.297552-26.012444 32.130791-29.958312 57.424874-65.413825 75.181283-105.379049 18.374486-41.35692 27.691689-85.472674 27.691689-131.122363 0-86.355787-33.628912-167.542854-94.691639-228.604558-61.062727-61.062727-142.249795-94.691639-228.604558-94.691639s-167.541831 33.628912-228.604558 94.691639c-61.062727 61.062727-94.691639 142.249795-94.691639 228.604558s33.628912 167.542854 94.691639 228.604558c61.062727 61.062727 142.249795 94.691639 228.604558 94.691639 26.15059 0 52.16508-3.130294 77.326133-9.301853 5.090948-1.353834 73.4038-19.189038 120.842229-14.809287 10.282181 0.948605 17.847483 10.05296 16.899902 20.335141s-10.047844 17.853623-20.335141 16.899902c-41.659819-3.845585-107.272165 13.571087-107.930151 13.747095-0.125867 0.033769-0.251733 0.065492-0.3776 0.097214-28.132734 6.91755-57.20998 10.425444-86.425372 10.425444-48.684816 0-95.922676-9.538237-140.402727-28.352745-42.953278-18.166755-81.523735-44.172035-114.644063-77.290317-33.119305-33.119305-59.123562-71.691809-77.29134-114.644063-18.813484-44.479027-28.352745-91.716888-28.352745-140.401704s9.53926-95.922676 28.352745-140.402727c18.167778-42.953278 44.172035-81.524758 77.29134-114.644063 33.119305-33.119305 71.690786-59.123562 114.644063-77.29134 44.480051-18.813484 91.717911-28.352745 140.402727-28.352745s95.922676 9.53926 140.401704 28.352745c42.953278 18.167778 81.524758 44.173059 114.644063 77.29134 33.118282 33.119305 59.123562 71.690786 77.29134 114.644063 18.813484 44.480051 28.351722 91.717911 28.351722 140.402727 0 50.912553-10.399861 100.136651-30.91101 146.305157-17.285688 38.906102-40.96704 73.973782-70.526263 104.47547l242.313791 242.310721c7.302313 7.30129 7.302313 19.138896 0.001023 26.440186C921.642774 944.912757 916.857794 946.738335 912.072815 946.738335z" p-id="14566" fill="#707070"></path><path d="M165.576059 421.887656c-0.696872 0-1.400906-0.038886-2.110057-0.118704-10.260691-1.152243-17.645892-10.404977-16.493649-20.666692 4.838192-43.080168 17.974373-83.934644 39.046295-121.429607 5.058203-9.002025 16.457834-12.19781 25.458835-7.139607 9.002025 5.058203 12.19781 16.45681 7.139607 25.458835-18.605753 33.108049-30.207999 69.202105-34.484396 107.282399C183.060269 414.827867 174.967964 421.887656 165.576059 421.887656z" p-id="14567" fill="#707070"></path></svg>
          </span>
          <span style="line-height: 70px;font-size: 20px;font-weight: bold">搜索</span>
        </span>
        <!--搜索-->
        <span class="menu_item" @click="routerChange('/pages/task',5)" :class="{active:activeItem==5}">
          <span class="item_ico">
            <svg t="1683022071134" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2654" width="32" height="32"><path d="M512 796a456.672 456.672 0 0 1-74.768-6.4L262 896V718.976C170.64 654.832 112 556.48 112 446 112 252.704 291.088 96 512 96s400 156.704 400 350S732.912 796 512 796z m0-650c-193.296 0-350 134.32-350 300 0 101.664 59.2 191.344 149.376 245.6l-1.6 115.968 117.68-70.736a404.8 404.8 0 0 0 84.544 9.168c193.296 0 350-134.304 350-300S705.296 146 512 146zM336 400a48 48 0 1 1-48 48 48 48 0 0 1 48-48z m176 0a48 48 0 1 1-48 48 48 48 0 0 1 48-48z m176 0a48 48 0 1 1-48 48 48 48 0 0 1 48-48z" p-id="2655" fill="#707070"></path></svg>
          </span>
          <span style="line-height: 70px;font-size: 20px;font-weight: bold">消息</span>
        </span>
        <!--登录-->
        <span v-if="this.user===null" class="menu_item" @click="routerChange('/pages/login',6)" :class="{active:activeItem==6}">
          <span class="item_ico">
            <svg t="1684673325933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2411" width="32" height="32"><path d="M614.015 562.226H409.928c-191.021 0-346.487 153.046-346.487 341.29v20.07C63.441 1024 216.36 1024 409.928 1024h204.087c185.927 0 346.46 0 346.5-100.413v-20.121c0-188.156-155.48-341.291-346.5-341.291zM501.77 0C350.075 0 226.7 121.566 226.7 271.02s123.323 271.047 275.07 271.047S776.84 420.475 776.84 271.02 653.454 0 501.771 0z" p-id="2412" fill="#707070"></path></svg>          </span>
          <span style="line-height: 70px;font-size: 20px;font-weight: bold">登录</span>
        </span>
        <!--我的-->
        <span class="menu_item" @click="routerChange('/manage',7)" :class="{active:activeItem==7}">
          <div class="avatar">
                <img :src="this.user.avatarUrl"  width="50" height="50" class="image">
          </div>
          <span style="line-height: 70px;font-size: 20px;font-weight: bold">{{this.user.username}}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import {loadTemplate} from "../../utils/baseUtil";

export default {
  name: "nav-head",
  data(){
    return{
      activeItem: 0
    }
  },
  mounted() {
    this.scrollProgress()
  },
  computed:{
    ...mapGetters(['isLogin','user'])
  },
  methods: {
    routerChange(path,active){
      if (active!=null){
        this.activeItem = active
      }else {
        this.activeItem = 0;
      }
      this.$router.push(path)
    },
    scrollProgress(){
      let scrollProgress = document.getElementById('scroll_progress_bar')
      let navHead = document.getElementById('navHead');
      document.addEventListener('scroll',()=>{
        const height =  document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 100){
          navHead.style.background = '#1cd6ba'
        }else {
          navHead.style.background = 'transparent'
        }
        scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
      })
    }
  }
}
</script>

<style scoped>
.nav-head {
  display: flex;
  position: fixed;
  flex-wrap: nowrap;
  width: 100vw;
  height: 70px;
  background-color: transparent;
  transition: ease-in-out .4s;
  z-index: 9999;
}

.half_nav {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
}

.menu_item{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px 0px;
  padding: 5px;
  background-color: transparent;
  transition: background-color ease .4s;
  cursor: pointer;
}
.avatar{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.active{
  background-color: #e7e312;
}
.menu_item:hover{
  background-color: #16b5e5;
}
.title {
  text-align: center;
  font-size: 2em;
  line-height: 70px;
  cursor: pointer;
}

.ico {
  display: block;
  background-image: url("../../assets/imgs/logo_k.png");
  width: 138px;
  height: 70px;
  background-position: 50% 50%;
  background-size: 200px;
  line-height: 70px;
  cursor: pointer;
}

.scroll_progress_bar {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 5px;
  background: #7a1eda;
  z-index: 10000;
  transition: ease .3s;
}
.item_ico{
  margin: auto;
}
</style>
