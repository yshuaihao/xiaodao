/** 历史记录 - 未完成 */

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('HistoryRecord')
export class HistoryRecord {
  /** 自增主键 */
  @PrimaryGeneratedColumn() id: number
  /** uuid 标识 */
  @Column() uuid: string
  @Column({ default: '' }) username: string
  @Column({ default: '' }) nickname: string
  @Column({ default: '' }) password: string
  @Column({ default: '' }) email: string
  @Column({ default: '' }) phone: string
  @Column({ default: '' }) address: string
  @Column({ default: '' }) headImgUrl: string
  @Column({ default: '' }) signatures: string
  @CreateDateColumn({ type: 'timestamp' }) createdAt: Date
  @UpdateDateColumn({ type: 'timestamp' }) updatedAt: Date
}
