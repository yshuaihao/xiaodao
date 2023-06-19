/** 统一返回处理 */
import type Koa from 'koa'
import { code, codeMessage } from '../constant/Enum/Code'

interface ResponseOption {
  data?: unknown
  typeName?: keyof typeof code
  message?: string
}

export const CommonResponse = (ctx: Koa.Context, { data, typeName, message }: ResponseOption) => {
  const statusCode = code[typeName] ?? code.Success
  const result = {
    code: statusCode,
    data: data ?? null,
    message: message ?? codeMessage[statusCode]
  }
  ctx.body = result
}
