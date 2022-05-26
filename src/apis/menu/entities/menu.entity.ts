import { User } from 'src/apis/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToMany(() => User)
  user: User;
}
