/** 数据库链接文件 */
import { DataSource, type EntitySchema } from 'typeorm'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AliyunMongoDB } from './MongoDB'
/** mysql 它不香吗 */
import { AliyunMysql } from './Mysql'

const Source = (database: string, entities: EntitySchema[]) => {
  const { host, username, password, port, type } = AliyunMysql
  return new DataSource({
    host,
    username,
    password,
    port,
    type,
    database,
    // authSource: 'admin' // mongodb 使用,

    synchronize: true,
    logging: false,
    entities: [...entities],
    migrations: [],
    subscribers: []
  })
}

/**
 * 链接阿里云上的 MongoDB 上的 develop_xiaodao_01 数据库
 * 链接阿里云上的 Mysql 上的 develop_xiaodao_01 数据库
 * @TODO 这个地方或许需要适配多个数据库
 * @TODO 这俩数据库是暂时可用的以后看看是否要替换
 */
export const connection = async (entity, entities) => {
  //   const connection = await Source(process.env.MongoDB_DATABASE, entities).initialize()
  const connection = await Source('develop_xiaodao_01', entities).initialize()
  const model = connection.getRepository(entity)
  return model
}
