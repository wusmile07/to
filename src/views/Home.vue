<template>
  <div class="home-container container" >
    <div class="header">
      <h1>新建文章</h1>
      <el-button
        type="primary"
        size="medium"
        @click="linkTo"
      >
        创建文章
        <i class="el-icon-circle-plus-outline"></i>
      </el-button>
    </div>
    <div v-if="article_list.length === 0" class="">
      暂无数据！！！
    </div>
    <ul v-else>
     <ul class="nav">
       <li>标题</li>
       <li>内容</li>
       <li>描述</li>
     </ul>
      <li v-for="(item, index) in article_list" :key="index">
        <div class="id">{{item.id}}</div>
        <router-link :to="{ name: 'article', params: { id: item.id } }" class="title">
          {{item.title}}
        </router-link>
        <div class="desc">{{item.description}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'home',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['article_list']),
  },
  async created() {
    try {
      this.getArticles({
        _limit: 20
      })
    } catch (e) {
      this.$notify.error({
        title: '错误',
        message: '网络错误！！！'
      });
    }
  },
  methods: {
    ...mapActions(['getArticles']),
    onChange() {
      this.$store.commit('increment')
    },
    linkTo() {
      this.$router.push({
        name: 'article-create'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  .header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  li {
    height: 50px;
    line-height: 50px;
    list-style: none;
    display: flex;
    justify-content:space-between;
    padding: 0 20px;
    &.id{
      font-size: 16px;
      line-height: 25px;
    }
    .title {
      font-size: 16px;
      line-height: 20px;
      text-decoration: none;
      color: #333;

      &:hover {
        color: gray;
        text-decoration: none;
      }
    }

    .desc {
      font-size: 16px;
      line-height: 25px;
    }
  }
}
.nav{
  height: 40px;
  border:1px solid gray;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

</style>

