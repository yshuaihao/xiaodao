import Router from 'koa-router'

// import * as CheckDemo from './Check'
import * as ControllerRobot from './Controller'

export const router = new Router({ prefix: '/robot' })
console.log(123)

/** 启动机器人 */
router.post(
  '/start',
  /** 启动机器人 */
  ControllerRobot.Start
)
router.post('/home', async (ctx) => {
  ctx.response.body = '<h1>hello koa HOME</h1>'
})

/** 暂停机器人 */
