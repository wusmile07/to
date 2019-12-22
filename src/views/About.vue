<template>
  <div class="about container">
    <h1>请留下你珍贵的留言，谢谢！！！</h1>
    <el-input class="input"
            placeholder="请输入内容"
            v-model="input"
            clearable>
    </el-input>
    <el-button type="success" @click="submit">提交</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    },
    methods:{
      submit() {
        if (this.input===''){
          this.$message.error('内容不能为空');
        }else {
          this.$router.push({
            name: 'home'
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 .input{
   width: 600px;
   margin: 0 auto;
 }
</style>
