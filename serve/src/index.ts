import Koa from 'koa'
import cors from 'koa2-cors'
import { koaBody } from 'koa-body'

import dotenv from 'dotenv'

/** 通用配置文件 */
import { BaseConfig } from './config'
/** 路由管理文件 */
import { initRoutes } from './routes'

/** 加载 env 文件 */
dotenv.config({ path: `${process.cwd()}/.env.${process.env.NODE_ENV}` })

const app = new Koa()

/** cors 跨域 -> #TODO 黑白名单？ */
app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true
  })
)

/** post 处理，文件上传 -> 暂时不写 */
app.use(koaBody())

/** 路由注册 */
initRoutes(app)

app.listen(BaseConfig.PORT, async () => {
  console.log(`App is running at http://localhost:${BaseConfig.PORT}`)
})
