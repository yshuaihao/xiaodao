interface IAliyunMongoDB {
  host: string
  username: string
  password: string
  port: number
  // #TODO type 不会写了 先这样吧
  type: 'mongodb'
}

export const AliyunMongoDB: IAliyunMongoDB = {
  host: '39.106.27.144',
  username: 'root',
  password: '123456',
  port: 27017,
  type: 'mongodb'
}
