// 原生js
// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('hello world')
// })

// server.listen(3000)


// Koa
// const Koa = require('koa')
// const app = new Koa()

// // ↓use里的箭头函数叫做中间件
// app.use((ctx, next) => {
//     ctx.body = 'hello koa'
// })
// app.listen(3000)



let Koa = require('./lib/application')
let app = new Koa()

app.use((req, res) => {
    res.end('hello mykoa')
})

app.listen(3000)