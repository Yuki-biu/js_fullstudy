module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          'nav-bar-background-color': '#42bd56',
          'nav-bar-icon-color': '#fff',
          'nav-bar-text-color': '#fff',
          'nav-bar-title-text-color': '#fff',
        },
      },
    },
  },
};