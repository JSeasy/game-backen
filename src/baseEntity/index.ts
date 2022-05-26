import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
export class BaseEntity {
  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;
}
