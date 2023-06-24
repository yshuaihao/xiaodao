import Router from 'koa-router'

export const router = new Router({ prefix: '' })

router.get('/home', async (ctx) => {
  ctx.response.body = '<h1>hello koa HOME</h1>'
})
