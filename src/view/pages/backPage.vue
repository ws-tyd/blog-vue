<template>
  <div class="main">
    <div class="half_body"></div>
    <div class="content" :style="{backgroundColor:(colorList[this.getIntRandom(colorList.length)])}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {getIntRandom} from '../../utils/baseUtil.js'
export default {
  name: "backPage",
  data(){
    return{
      colorList:[
        '#bba7a7',
        '#da4444',
        '#62b221',
        '#37a89c',
        '#17bbc4',
        '#c45eef',
        '#7b3c96',
        '#24cc9a',
        '#bb8c20',
        '#eeee27',
      ]
    }
  },
  methods:{
    getIntRandom
  }
}
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #e7dbdb;
}
.half_body{
  display: block;
  width: 100vw;
  height: 500px;
  background-image: url("http://127.0.0.1:9000/pics/2022-10/09/7dfbdda694664aa5ba5a587b566041d3.jpg");
  background-size: cover;
  background-position: 50% 50%;
}
.content{
  display: flex;
  padding: 20px;
  justify-content: center;
  width: 55%;
  min-height: 450px;
  height: auto;
  position: relative;
  top: -10vh;
  border-radius: 20px;

}
.half_body_footer{
  display: flex;
  width: 100vw;

}
</style>
