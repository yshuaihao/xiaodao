import Koa from 'koa'
import Router from 'koa-router'
const port = 8000
const app = new Koa()
const router = new Router()

router.get('/home', async (ctx) => {
  ctx.response.body = '<h1>hello koa HOME</h1>'
})

router.get('/login', async (ctx) => {
  ctx.response.body = '<h1>Login</h1>'
})

app.use(router.routes())

app.listen(port)
console.log(`Serve started at port ${port}~`)
