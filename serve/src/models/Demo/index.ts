import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

import { DemoList } from './DemoList'
export { DemoList }

@Entity('Demo')
export class Demo {
  /** 自增主键 */
  @PrimaryGeneratedColumn() id: number
  /** uuid 标识 */
  @Column() uuid: string
  @Column() name: string
  /** #TODO 这个地方有个问题，存进去的不是 timestamp 格式的 */
  /** 创建时间 */
  @CreateDateColumn({ type: 'timestamp' }) createdAt: Date
  /** 更新时间 */
  @UpdateDateColumn({ type: 'timestamp' }) updatedAt: Date

  /** 一对多 */
  @OneToMany(() => DemoList, (demoList) => demoList.id)
  @JoinColumn()
  demoLists: DemoList[]
}
