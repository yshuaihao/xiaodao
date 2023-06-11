import Koa from 'koa'
import Router from 'koa-router'
import cors from 'koa2-cors'
import axios from 'axios'
const port = 8000
const app = new Koa()
const router = new Router()
app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true
  })
)

router.get('/home', async (ctx) => {
  ctx.response.body = '<h1>hello koa HOME</h1>'
})

router.get('/login', async (ctx) => {
  ctx.response.body = '<h1>Login</h1>'
})

router.get('/chat', async (ctx) => {
  try {
    const { msg } = ctx.query
    const response = await axios.get(`http://api.qingyunke.com/api.php?key=free&appid=0&msg=${msg}`)
    const data = response.data
    ctx.body = data
  } catch (error) {
    console.error(error)
    ctx.status = 500
    ctx.body = 'Internal Server Error'
  }
})

app.use(router.routes())
app.listen(port)
console.log(`Serve started at port ${port}~`)