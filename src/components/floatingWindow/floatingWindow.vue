<template>
  <div class="hoverTag">
    <slot ></slot>
    <div class="infoBox">
      <div class="infoContext">
        <div class="infoUp">
          <img src="" alt="">
        </div>
        <div class="avatar">
          <img :src="url" alt="" width="50" height="50" style="object-fit: fill">
        </div>
        <div class="infoDown">

        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "floatingWindow",
  data(){
    return{
    url:'http://47.102.148.14:9000/avatar/2023-04/28/c29faf7ca0d84c73865bbc42e25890ac.jpg'
    }
  },
  mounted() {

  },

}
</script>

<style scoped >
@keyframes k1 {
  0%{
    width: 0;
    height: 0;
    top: 100px;
    box-shadow: #0f95be 0 0 0px 0px;
  }
  100%{
    width: 300px;
    height: 200px;
    top: 60px;
    box-shadow: #0f95be 0 0 8px 4px;
  }
}
.avatar{
  box-sizing: border-box;
  position: absolute;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
.infoBox{
  display: none;
  position: absolute;
  top: 60px;
  width: 0px;
  height: 0px;
  background: #0f95be;
  border-radius: 20px;
  padding: 10px;
  box-shadow: #0f95be 0 0 0px 0px;
  animation:  k1 .5s;
}
.hoverTag{
  display: flex;
  justify-content: center;
  align-items: center;
}
.hoverTag:hover .infoBox{
  display: flex;
  width: 300px;
  height: 200px;
  top: 60px;
  box-shadow: #0f95be 0 0 8px 4px;
}
.infoContext{

}
</style>