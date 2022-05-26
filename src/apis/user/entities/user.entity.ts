import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/baseEntity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  realName: string;

  @Column()
  userName: string;

  @Exclude()
  @Column()
  password: string;

  @Column({
    comment: '男:1,女:0',
  })
  sex: number;

  @Column()
  age: number;

  @Column()
  school: string;
}
