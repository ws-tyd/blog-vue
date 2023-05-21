<template>
  <NavHead></NavHead>
  <router-view></router-view>
  <loading id="load" style="display: none"></loading>
</template>
<script>

import Index from "./view/index.vue";
import NavHead from "./components/nav/nav-head.vue";
import Loading from "./components/loading/loading.vue";
import {mapState} from "vuex";
import {taskMixins} from './utils/mixins/index'
export default {
  name: 'App',
  mixins: [taskMixins],
  data(){
    return{
      pageVo:{
        current: 1,
        desc: null,
        size: 50
      }
    }
  },
  components: {NavHead, Index,Loading},
  mounted() {
    this.getPic()
  },
  methods:{
    getPic(){
      if (this.picArray.length==0){
        this.$store.dispatch('queryAllPicPage',this.pageVo)
      }
    }
  },
  computed:{
    ...mapState(['picArray'])
  }
}
</script>
