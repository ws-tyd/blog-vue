<template>
<div class="background" :style="{backgroundImage:`url(${imageUrl})`}">
  <span class="text">页面找不到,资源不存在</span>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "404",
  data() {
    return {
      imageUrl: ''
    }
  },
  computed:{
    ...mapGetters(['picArray'])
  },
  mounted() {
    console.log(Math.floor(Math.random()*this.picArray.length))
    this.imageUrl = this.picArray[Math.floor(Math.random()*this.picArray.length)]
  }
}
</script>

<style scoped>
.background{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 100;
}
.text{
  font-size: 5em;
  font-weight: bold;
}
</style>
