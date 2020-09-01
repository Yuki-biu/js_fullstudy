<template>
  <div class="home">
    <el-container>

      <el-header>
        <h2>管理系统</h2>
        <div class="user-control">
          <el-dropdown @command="out">
            <span class="el-dropdown-link">
              {{$route.query.name}}
              <!-- params传参不能缓存 -->
              <!-- {{$route.params.name}} -->
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="/setting">设置</el-dropdown-item>
              <el-dropdown-item command="/changePW">修改密码</el-dropdown-item>
              <el-dropdown-item command="/">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-container>

        <el-aside width="200px">
          <el-menu
            style="height: 100%;"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/user1">用户1</el-menu-item>
                <el-menu-item index="/home/user2">用户2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    out(command) {
      console.log(123);
      this.$router.push({ path: command });
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
  }
};
</script>

<style>
.is-vertical {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  line-height: 60px;
  justify-content: space-between;
}

.el-header h2 {
  width: 50%;
  display: inline-block;
}

.el-header .user-control {
  width: 50%;
  display: inline-block;
  text-align: right;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
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
</style>