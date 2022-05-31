import dayjs from 'dayjs';
import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  AfterLoad,
} from 'typeorm';
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
