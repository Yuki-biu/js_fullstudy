// 引入依赖 commonJS
const Koa = require('koa')

const app = new Koa()  // 定义一个新的Koa实例

const main = ctx => {
    ctx.response.body = "hello world"
}

app.use(main)   // 运行函数

app.listen(3000, () => {
    console.log('3000端口监听中')
})