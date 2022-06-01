import { User } from 'src/apis/user/entities/user.entity';
import { BaseEntity } from 'src/baseEntity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Menu extends BaseEntity {
  @Column()
  menuName: string;

  @Column()
  componentName: string;

  @Column()
  pathName: string;

  @Column()
  iconName: string;

  @Column({ default: 0 })
  parentId: number;

  @ManyToMany(() => User, (user) => user.menus)
  @JoinTable()
  users: User[];
}
