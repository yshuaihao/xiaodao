import { ScanStatus } from 'wechaty'
import * as qrTerm from 'qrcode-terminal'

/**
 *  @description: 登录状态验证
 *  @todo: 将登录二维码返回聊天框
 */

export const onScan = (qrcode, status) => {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    // 二维码在终端显示
    qrTerm.generate(qrcode, { small: true })
  }
}
