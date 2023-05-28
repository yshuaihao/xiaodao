import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()
router.get('/', async (ctx, next) => {
  ctx.response.body = 'hello koa'
  next()
})

app.listen(8181)
console.log('Serve started at port 8181~')
