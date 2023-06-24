import { Robot } from '../../middleware'
import type Koa from 'koa'
import { CommonResponse } from '../../utils/CommonResponse'

/**
 *  Start
 *  @param {*} name 介绍
 *  @return {*} 介绍
 */
export const Start = async (ctx: Koa.Context) => {
  try {
    const robot = await Robot.initRobot(ctx)
    await robot.start()
    CommonResponse(ctx, { data: true, message: '启动成功！' })
  } catch (error) {
    console.log(error)
    CommonResponse(ctx, { typeName: 'Error' })
  }
}
