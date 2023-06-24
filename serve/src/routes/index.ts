import fs from 'fs'

/**
 *  自动化注册路由
 *  @description 加载当前目录下的所有文件， except 数组为不加载的文件(夹)
 *  @important 导出必须为 router #TODO?
 */
export const initRoutes = (app) => {
  const except = ['index.ts']
  fs.readdirSync(__dirname).forEach(async (file) => {
    if (except.includes(file)) {
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { router } = require(`./${file}/Router`)
    app.use(router.routes())
  })
}
