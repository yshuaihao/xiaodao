import type Koa from 'koa'
import { CommonResponse } from '../../utils/CommonResponse'

/**
 *  @description: 参数校验
 *  @TODO: 暂时使用自定义参数校验
 *  @TODO: 策略模式？
 */

export const CheckAddParams = async (ctx: Koa.Context, next: Koa.Next) => {
  const params = {
    name: { type: 'string', required: true }
  }
  for (const key in params) {
    const value = ctx.request.body[key]
    if (params[key].required && !value) {
      // TODO 这个地方的 ts 提示需要加一下
      CommonResponse(ctx, { typeName: 'CheckError', message: `${key}为必填项！` })
    }
    if (params[key].type && typeof value !== params[key].type) {
      CommonResponse(ctx, { typeName: 'CheckError', message: `${key}类型错误！` })
    }
  }
  await next()
}
