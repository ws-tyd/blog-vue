<template>
  <div class="loading_main" id="load">
    <div class="loading" >
      <span>loading.....</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading"
}
</script>

<style scoped>
.loading_main{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1B1464;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 100001;
}
.loading{
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  /* background-color: #911f7e; */
  border-radius: 50%;
  border-top: 10px solid #EE5A24;
  position: relative;
  animation: a1 2s linear infinite;
}
.loading::before,.loading::after{ /*伪元素一定要与content一起使用。::brfore表示在loading前面加东西，::after表示在元素后面加内容。content就是内容*/
  content: '';
  width: 200px;
  height: 200px;
  /* background: red; */
  position: absolute;
  left: 0;
  top: -10px;
  box-sizing: border-box;
  border-radius: 50%;
}
.loading::before{
  border-top: 10px solid #e67e22;
  transform: rotate(120deg);
}
.loading::after{
  border-top: 10px solid #009432;
  transform: rotate(240deg);
}
.loading span{
  position: absolute;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  animation: a2 2s linear infinite;
}
@keyframes a1{
  to{transform: rotate(360deg);}
}
@keyframes a2{
  to{transform: rotate(-360deg);}
}
</style>
