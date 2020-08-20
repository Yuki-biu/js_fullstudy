const Koa = require('koa')
const app = new Koa()
// const path = require('path')
// const serve = require('koa-static')

const handle = async(ctx, next) => {
    // 捕捉错误 如果出错则直接输出一个错误页面
    // 用 p 标签装内容  something error, you should contact adminster
    try {
        await next()
    } catch (err) {
        ctx.response.status = err.statusCode | err.status | 500
        ctx.response.type = 'html'
        ctx.response.body = `<p>ERROR MESSAGE : ${err.message}</p>`
        ctx.app.emit('error', err, ctx)
    }
}

const main = ctx => {
    ctx.throw(500)
}

app.on('error', function(err) {
    console.log(err)
    console.log('logger error', err.message)
})

app.use(handle)
app.use(main)
app.listen(3000)