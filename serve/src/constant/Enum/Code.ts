/**
 *  @description: 统一 code 返回
 */

export const code = {
  Success: 0,
  CheckError: 400,
  Denied: 401,
  Error: 500,
  NotLogin: 999
}

export const codeMessage = {
  [code.Success]: '请求成功',
  [code.CheckError]: '参数错误',
  [code.Denied]: '无权限',
  [code.Error]: '未知的错误',
  [code.NotLogin]: '未登录'
}
