import dayjs from 'dayjs';
import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
