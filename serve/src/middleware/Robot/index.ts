import { WechatyBuilder } from 'wechaty'
import type Koa from 'koa'

import { onScan } from './OnScan'
import { receiveMessage } from './Message'

import { CommonResponse } from '../../utils/CommonResponse'

/**
 *  @description: 初始化一个新的机器人
 */
export const initRobot = async (ctx: Koa.Context) => {
  const robot = WechatyBuilder.build({
    name: 'wechaty-bot',
    puppetOptions: {
      uos: true // 开启 uos 协议
    },
    puppet: 'wechaty-puppet-wechat'
  })

  robot.on('scan', async (qrcode, status) => {
    onScan(qrcode, status)
  })

  robot.on('login', async () => {
    console.log('登陆成功')
  })

  robot.on('message', async (msg) => {
    /** 自己的消息不处理 */
    if (msg.self()) return
    const message = await receiveMessage(msg)
    /** 这个地方的返回用于页面调用使用 */
    CommonResponse(ctx, { data: message })
  })

  robot.on('friendship', async (friendship) => {
    /** 好友请求 */
    console.log(friendship)
  })

  return robot
}

/**
 *  @description: 查看当前正在运行的机器人列表
 */
// export const robotList = (ctx: Koa.Context) => {}
