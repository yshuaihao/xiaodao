import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('DemoList')
export class DemoList {
  @PrimaryGeneratedColumn() id: number
  @Column() uuid: string
  @Column({ default: '' }) demo1: string
  @Column({ default: false }) demo2: boolean
  @CreateDateColumn({ type: 'timestamp' }) createdAt: Date
  @UpdateDateColumn({ type: 'timestamp' }) updatedAt: Date
}
