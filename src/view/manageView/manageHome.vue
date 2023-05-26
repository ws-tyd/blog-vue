<template>
    <div class="manageContext">
      <el-container>
        <el-aside width="1200px">

        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </div>
</template>

<script>
import {loadTemplate} from "../../utils/baseUtil";
export default {
  name: "manageHome",
  mounted() {
    loadTemplate.loading('load',1000)
  }
}
</script>

<style scoped lang="scss">
.manageContext{
  position: relative;
  width: 100%;
  height: 100%;
  background: #0f95be;
}
</style>