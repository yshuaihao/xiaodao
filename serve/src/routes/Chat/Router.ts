import Router from 'koa-router'
import axios from 'axios'

export const router = new Router({ prefix: '' })

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
