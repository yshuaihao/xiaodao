/** 消息服务 */
import { type Message } from 'wechaty'
import { handleType7, handleDefault } from './ReceiveMessage'
/**
 *  接收消息并回复
 *
 */
export const receiveMessage = async (msg: Message) => {
  let message = ''
  /** 判断消息类型 */
  switch (msg.type()) {
    /** 匹配到文字 */
    case 7:
      message = await handleType7(msg)
      break

    default:
      message = await handleDefault(msg)
      break
  }
  return message
}

/**
 * 主动发送消息
 * @description: 目前用于机器人加载完成后的通知
 */
// export const send = () => {}
