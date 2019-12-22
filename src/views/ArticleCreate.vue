<template>
  <div class="article-create-container container">
    <h1 >创建文章</h1>
    <div class="form">
      <div class="item">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="article.title"
          maxlength="20"
          show-word-limit
        />
      </div>
      <div class="item">
        <el-input
          type="text"
          placeholder="请输入标题"
          v-model="article.description"
          maxlength="20"
          show-word-limit
        />
      </div>
      <div class="item">
        <el-input class="input"
                  placeholder="请输入描述"
                  v-model="article.detail"
                  clearable>
        </el-input>
      </div>
      <div class="item">
        <el-button type="primary" @click="submitArticle">创建</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import http from 'axios'

export default {
  data() {
    return {
      article: {
        title: '',
        description: '',
        detail: ''
      }
    }
  },
  methods: {
    async submitArticle() {
      if (this.article.title) {
        try {
          await http.post('http://localhost:3000/articles', {
            ...this.article
          })
          this.$router.go(-1)
        } catch (e) {
          this.$notify.error({
            title: '错误',
            message: '网络错误！！！'
          });
        }
      } else {
        this.$message.error('标题不能为空');
      }
    }
  }
}
</script>

<style lang="scss">
.article-create-container {
  h1{
    height: 30px;
    font-size: 18px;
    color: cadetblue;
  }

  .form {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 30px;

    .item {
      width: 600px;
      height: 80px;
      margin: 0 auto;

      > button {
        width: 100%;
      }
    }
  }
}
</style>
