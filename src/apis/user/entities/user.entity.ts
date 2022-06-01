import { Exclude } from 'class-transformer';
import { Menu } from 'src/apis/menu/entities/menu.entity';
import { BaseEntity } from 'src/baseEntity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity()
export class User extends BaseEntity {
  @Column()
  realName: string;

  @Column({
    unique: true,
  })
  userName: string;

  @Exclude()
  @Column({ select: false })
  password: string;

  @Column({
    comment: '男:1,女:0',
  })
  sex: number;

  @Column()
  age: number;

  @Column()
  school: string;

  @ManyToMany(() => Menu, (menu) => menu.users)
  menus: Menu[];
}
