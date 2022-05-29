import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
export class BaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    transformer: {
      from(value) {
        return value ? value.slice(0, 19) : value;
      },
      to: (value) => {
        return value;
      },
    },
  })
  createDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    transformer: {
      from(value) {
        return value ? value.slice(0, 19) : value;
      },
      to: (value) => {
        console.log(value, 'ssss');
        return value;
      },
    },
  })
  updateDate: Date;

  @DeleteDateColumn({
    type: 'timestamp',
  })
  deleteDate: Date;
}
