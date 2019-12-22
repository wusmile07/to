<template>
  <div id="app">
    <el-container>
      <el-header>文章</el-header>
      <el-container class="middle">
        <el-aside width="200px" class="left">
            <router-link :to="{ name: 'home' }">
              <i class="el-icon-s-home"></i>主页
            </router-link>
          <br>
          <router-link :to="{ name: 'about' }">
            <i class="el-icon-info"></i>关于我们
          </router-link>
        </el-aside>
        <el-main class="right">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

.container {
  width:100%;
  background: #F0F8FF;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /*background-color: #E9EEF3;*/
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.middle{
  display: flex;
  justify-content: space-between;
}
.left{
  width: 400px;
}
  .right{
    flex-grow: 1;
  }
  a{
    text-decoration: none;
  }

</style>
