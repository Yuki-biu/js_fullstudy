const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const main = ctx => {
    // if (ctx.request.url == '/about') {
    //     ctx.response.type = 'html'
    //     ctx.response.body = '<a href="/">About</a>'
    // } else {
        ctx.response.body = 'Hello World'
    // }
}

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">About</a>'
}
app.use(route.get('/about', about))   // 获取客户端请求的路径
app.use(route.get('/', main))   
// app.use(main)
app.listen(3000)