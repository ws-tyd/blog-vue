<template>
<div>
  后台首页
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

<style scoped>

</style>