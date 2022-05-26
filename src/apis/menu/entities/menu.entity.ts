import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
