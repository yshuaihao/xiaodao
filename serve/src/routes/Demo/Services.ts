import { connection } from '../../constant/database'
import { DemoModels } from '../../models'

const allModel = [DemoModels.Demo, DemoModels.DemoList]

/** Add */
export const Add = async (name) => {
  const model = await connection(DemoModels.Demo, allModel)
  const demo = await model
    .createQueryBuilder('model')
    .insert()
    .values([
      {
        // #TODO 需要使用 uuid 生成包
        uuid: +new Date(),
        name
      }
    ])
    .execute()
  return demo
}
