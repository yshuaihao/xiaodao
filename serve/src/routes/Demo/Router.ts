import Router from 'koa-router'

import * as CheckDemo from './Check'
import * as ControllerDemo from './Controller'

/** 路由前缀 /demo */
export const router = new Router({ prefix: '/demo' })

/** 增 */
router.post(
  /** 路由 */
  '/add',
  /** 参数校验 */
  CheckDemo.CheckAddParams,
  /** 新增并返回结果 */
  ControllerDemo.Add
)
/** 删 */
/** 改 */
/** 查 */
router.get('/home', async (ctx) => {
  ctx.response.body = '<h1>hello koa HOME</h1>'
})
