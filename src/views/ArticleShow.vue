<template>
  <div class="container article-show-container">
    <h1>{{article.title}}</h1>
    <p>{{article.description}}</p>
    <p>{{article.detail}}</p>
    <el-button type="primary" @click="linkTo">
      编辑
      <i class="el-icon-edit"></i>
    </el-button>
    <el-button type="danger" @click="del">
      删除
      <i class="el-icon-delete"></i>
    </el-button>
  </div>
</template>

<script>
import http from 'axios'

export default {
  data() {
    return {
      article: {}
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    async getArticle() {
      const {id} = this.$route.params
      try {
        const res = await http.get(`http://localhost:3000/articles/${id}`)
        this.article = res.data
      } catch (e) {
        this.$notify.error({
          title: '错误',
          message: '网络错误！！！'
        });
      }
    },
    linkTo() {
      this.$router.push({
        name: 'article-edit',
        params: {
          id: this.$route.params.id
        }
      })
    },
    del() {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const {id} = this.$route.params
        try {
          await http.delete(`http://localhost:3000/articles/${id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.$router.push({
            name: 'home'
          })
        } catch (e) {
          console.log(e)
          this.$notify.error({
            title: '错误',
            message: '网络错误！！！'
          });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.article-show-container {
  h1{
    height: 50px;
  }
  p{
    height: 50px;
  }
}

</style>
