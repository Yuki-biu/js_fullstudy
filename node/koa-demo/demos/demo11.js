const Koa = require('koa')
const compose = require('koa-compose')
const app = new Koa()
// const route = require('koa-route')

const logger = (ctx, next) => {
    console.log(`${ctx.request.url} - ${ctx.request.method} - ${Date.now()}`)
    next()
}

const main = ctx => {
    ctx.response.body = 'hello world'
}

const middlewares = compose([logger, main])

app.use(logger)
app.use(main)

app.listen(3000)
