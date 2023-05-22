<template>
  <div class="body">
    <div id="background" class="bj" >言覃小站</div>
    <h1 class="text">The author is 礼弥</h1>
    <div v-for="(item,index) in imageList" :key="index" class="bj2" :style="{backgroundImage:`url(${item})`}">
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {getIntRandom} from "../utils/baseUtil";

export default {
  name: "index",
  data() {
    return {
      imageList: []
    }
  },
  mounted() {
    this.imageList = this.picArray.slice(0,3)
    this.bi()
  },
  computed: {
    ...mapGetters(["picArray"])
  },
  methods:{
    bi(){
      let background = document.getElementById('background')
      let pic = this.picArray[getIntRandom(this.picArray.length)]
      background.style.backgroundImage = `url("${pic}")`
      document.addEventListener('scroll',()=>{
        const  scrollY = window.scrollY
        if (scrollY!==0){
          background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
        }else {
          background.style.backgroundPosition = ''
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../assets/css/聚光灯/index.css";
.body{
  display: block;
  width: 100vw;
  height: auto;
}
.bj{
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-image: url("http://47.102.148.14:9000/pics/2022-10/20/886940f47fac41eca46a42c4f00fc9ca.jpg");
  background-size: cover;
  background-position: 50% 50%;
  width: 100vw;
  height: 100vh;
  font-size: 20em;
  font-family: 'Weibei SC';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.bj::before{
  content:'' ;
  background-size: cover;
  background-image: inherit;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -99;
}
.bj2{
  display: block;
  width: 1960px;
  height: 1000px;
  /*background-image: url("http://127.0.0.1:9000/pics/2022-10/09/7dfbdda694664aa5ba5a587b566041d3.jpg");*/
  background-size: cover;
  z-index: 100;
}

</style>
