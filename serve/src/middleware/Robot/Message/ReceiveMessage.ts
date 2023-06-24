/** 消息返回逻辑处理 */
import type { Message } from 'wechaty'

/** 文字回复：7 */
export const handleType7 = async (msg: Message) => {
  const user = msg.talker()
  const text = msg.text()

  /** 根据文本匹配关键字 */
  let message = ''

  switch (true) {
    /** 打招呼 */
    case /^(你好|打招呼)$/g.test(text):
      message = '这里是机器人的回复哦~'
      break
    default:
      message = '阿巴巴巴'
      break
  }

  message && user.say(message)
  return message
}

/** 兜底回复 */
export const handleDefault = async (msg: Message) => {
  const message = '该功能还在努力更新中哦~~'
  const user = msg.talker()
  message && user.say(message)
  return message
}
