<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe96d;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe600;</i>
    </v-header>
    <v-tab></v-tab>

    <!-- 缓存 -->
    <keep-alive>
      <router-view/>
    </keep-alive>

    <!-- menu -->
    <v-sidebar></v-sidebar>
    
  </div>
</template>

<script>
import header from '@/components/header.vue'
import sidebar from '@/components/sidebar.vue'
import tab from '@/components/tab.vue'
export default {
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-tab': tab
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2053868 */
  src: url('//at.alicdn.com/t/font_2053868_9hi2bvmx80e.eot');
  src: url('//at.alicdn.com/t/font_2053868_9hi2bvmx80e.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2053868_9hi2bvmx80e.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2053868_9hi2bvmx80e.woff') format('woff'),
  url('//at.alicdn.com/t/font_2053868_9hi2bvmx80e.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2053868_9hi2bvmx80e.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}

</style>
