<template>
  <div class="slideVerifyContext" id="slideVerifyContext">
    <div>
      <slide-verify
          ref="block"
          :slider-text="text"
          :accuracy="accuracy"
          :imgs="slideVerifyArray"
          @again="onAgain"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
      ></slide-verify>
      <!--      <button class="btn" @click="handleClick">在父组件可以点我刷新哦</button>-->
    </div>
  </div>
  <!--  <button @click="handleClick">在父组件可以点我刷新哦</button>-->
</template>

<script>
import SlideVerify from "vue3-slide-verify";
import "vue3-slide-verify/dist/style.css";
import {mapState} from "vuex";
import {ElMessage} from "element-plus";
import axios from "axios";
import {queryAllSlideVerifyArray} from "../../api/picApi";

export default {
  components: {SlideVerify},
  name: "SliderVerify",
  data() {
    return {
      msg: '',
      flag: false,
      text: '向右滑动=>',
      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 5,
    }
  },
  mounted() {
    this.getSlideVerifyArray()
    this.openL()
  },
  methods: {
    openL(){
      document.addEventListener("click",this.hideModal);
      let slideVerifyContext = document.getElementById('slideVerifyContext')
      slideVerifyContext.addEventListener('click',(e)=>{
        e = e||window.event
        e.stopPropagation()
      })
    },
    hideModal(){
      if (this.flag) {
        setTimeout(() => {
          this.$emit('checked', false)
        }, 300)
      }
      this.flag = true
    },
    getSlideVerifyArray() {
      if(this.slideVerifyArray.length === 0){
        queryAllSlideVerifyArray().then(resp => {
          this.$store.commit('setSlideVerifyArray', resp)
        })
      }
    },
    onSuccess(times) {
      ElMessage({
        message: '验证成功',
        type: 'success',
        offset: 300

      })
      setTimeout(() => {
        this.$emit('checked', true)
      }, 500)
    },
    onFail() {
      ElMessage({
        message: '验证失败',
        type: 'info',
        offset: 300
      })
    },
    onRefresh() {
      ElMessage.success("刷新成功")
    },
    onFulfilled() {
      ElMessage.success("刷新成功")
    },
    onAgain() {
      console.log('检测到非人为操作的哦！');
      ElMessage.warning("检测到非人为操作的哦！,请重新尝试")
      // 刷新
      this.$refs.slideblock.reset();
    },
    handleClick() {
      // 父组件直接可以调用刷新方法
      this.$refs.slideblock.reset();
    },
  },
  computed: {
    ...mapState(['slideVerifyArray'])
  }
}
</script>

<style scoped lang="scss">
.slideVerifyContext {
  position: absolute;
  z-index: 9999;
  background: #16b5e5;
  box-shadow: whitesmoke 0 0 5px 5px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
