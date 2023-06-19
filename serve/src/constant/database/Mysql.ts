interface IAliyunMysql {
  host: string
  username: string
  password: string
  port: number
  // #TODO type 不会写了 先这样吧
  type: 'mysql'
}

export const AliyunMysql: IAliyunMysql = {
  host: '39.106.27.144',
  username: 'root',
  password: 'HuWenDi1!@#',
  port: 3306,
  type: 'mysql'
}
