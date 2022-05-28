import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { arrToTree } from 'src/utils/inex';
import { Between, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateMenuDto, QueryMenuDto } from './dto/menu.dot';
import { Menu } from './entities/menu.entity';

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
  async getList(offset: number, limit: number, queryMenuDto: QueryMenuDto) {
    const { pageSize, current, createDateBefore, createDateAfter, ...params } =
      queryMenuDto;
    console.log(createDateAfter, createDateBefore);
    const total = await this.menuRepository.count();
    const result = await this.menuRepository
      .createQueryBuilder('menu')
      .skip((offset - 1) * limit)
      .take(limit)
      .where({
        ...params,
        // 查询范围
        // id: Between(2, 3),
      })
      .leftJoinAndSelect('menu.users', 'users')
      .orderBy('menu.id', 'DESC')
      .getMany();
    return {
      total,
      data: result,
      current: offset,
      pageSize: limit,
    };
  }

  //获取树形结构
  async getTree() {
    const result = await this.menuRepository.find();
    return arrToTree(result);
  }

  async delete(id: number) {
    const result = await this.menuRepository.findOneBy({ id });
    // result.deleteDate = ;
    await this.menuRepository.save(result);
    return null;
  }
}
