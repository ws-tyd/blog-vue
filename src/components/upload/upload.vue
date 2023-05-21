<template>
  <div>
    <el-upload
        v-model:file-list="fileList"
        action="api/product/file/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "upload",
  data(){
    return{
      fileList:[],
      dialogVisible:false,
      dialogImageUrl:''
    }
  },
  methods:{
    handlePictureCardPreview(uploadFile){
      this.dialogImageUrl.value = uploadFile.url
      this.dialogVisible.value = true
    },
    handleRemove(){

    },
  }
}
</script>

<style scoped>

</style>
