import Router from 'koa-router'

export const router = new Router({ prefix: '' })

router.get('/login', async (ctx) => {
  ctx.response.body = '<h1>Login</h1>'
})
