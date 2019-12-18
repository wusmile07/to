<template>
  <div class="home-container">
    <div class="box">
      <ul class="list">
        <li v-for="(item, index) in Data"
            :key="index"
            class="group">
          <router-link to="About">{{item.title}}</router-link>
          <i class="fa fa-close" @click="del(item.id)"></i>
        </li>
      </ul>
      <div class="form">
        <input type="text"  class="input" placeholder="请填写你新建的内容" ref="getValue">
        <div class="append">
          <button class="btn" type="button" id="create-todo" @click="add()">创建</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Home',
    data() {
      return {
        Data: []
      }
    },
    async created() {
      try {
        const res = await axios({
          method: 'GET',
          url: 'http://localhost:3000/todo'
        })
        this.Data = res.data
      } catch (e) {
        console.log(e)
      }
    },
    methods: {
      del(id) {
        if (window.confirm('确定要删除此项吗？')) {
          axios({
            url: `http://localhost:3000/todo/${id}`,
            method: 'DELETE',
          })
        }
      },
      add(){
        axios({
          url: 'http://localhost:3000/todo',
          method: 'POST',
          data: {
            title:this.$refs.getValue.value
          }
        })
        // console.log(this.$refs.getValue.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-container {
    width: 300px;
    margin:20px auto;
    border: 1px solid black;
  }

  .box .group {
    border: 1px solid indianred;
    height: 50px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box .group i {
    cursor: pointer;
  }

  .box .group i:hover {
  transform:scale(1.2);
  }

  .append{
    margin-top: 10px;
  }
  .input{
    width: 200px;
    height: 30px;
    margin-left: 20px;
  }

  .form {
    margin: 20px auto;
  }
  .btn{
    width: 50px;
    height:40px;
    margin-left: 30px;
  }

</style>