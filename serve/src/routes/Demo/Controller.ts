import type Koa from 'koa'
import { CommonResponse } from '../../utils/CommonResponse'
import * as ServicesDemo from './Services'

/**
 *  Add
 *  @param {*} name 介绍
 *  @return {*} 介绍
 */
export const Add = async (ctx: Koa.Context) => {
  //   #TODO 这个解构应该咋写好（ts）
  const { name } = ctx.request.body
  try {
    const result = await ServicesDemo.Add(name)
    if (result) {
      CommonResponse(ctx, { data: true, message: '新增成功！' })
    } else {
      // TODO 此位置暂未明确报错是什么，先做个默认处理
      CommonResponse(ctx, { typeName: 'Error' })
    }
  } catch (error) {
    console.log(error)
    CommonResponse(ctx, { typeName: 'Error' })
  }
}
