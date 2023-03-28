const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // scss 引入全局变量
        additionalData: `@import "~@/stylesheet/define.scss";`
      }
    }
  },
})
