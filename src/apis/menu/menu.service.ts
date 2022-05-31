import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { arrToTree } from 'src/utils/inex';
import { Between, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateMenuDto, QueryMenuDto } from './dto/menu.dot';
import { Menu } from './entities/menu.entity';
import { createLikeParams } from '../../utils/inex';
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //新增
  async create(createMenuDto: CreateMenuDto) {
    const users = await this.userRepository.find();
    const menus = await this.menuRepository.find();
    const menu = await this.menuRepository.create({ ...createMenuDto });
    menu.users = users;
    users.forEach((user) => {
      user.menus = menus;
    });
    await this.menuRepository.save(menu);
    await this.userRepository.save(users);
    return null;
  }

  //翻页
  async getList(queryMenuDto: QueryMenuDto) {
    const { pageSize = 10, current = 1, ...params } = queryMenuDto;
    const total = await this.menuRepository.count();
    const result = await this.menuRepository
      .createQueryBuilder('menu')
      .skip((current - 1) * pageSize)
      .take(pageSize)
      .where(createLikeParams(['iconName'], params))
      // .leftJoinAndSelect('menu.users', 'users')
      .orderBy('menu.id', 'DESC')
      .getMany();
    return {
      total,
      data: result,
      current,
      pageSize,
    };
  }

  //获取树形结构
  async getTree() {
    const result = await this.menuRepository.find();
    return arrToTree(result);
  }

  async delete(id: number) {
    const result = await this.menuRepository.findOneBy({ id });
    result.deleteDate = new Date();
    await this.menuRepository.save(result);
    return null;
  }
}
