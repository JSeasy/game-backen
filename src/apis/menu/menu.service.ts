import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { arrToTree } from 'src/utils/inex';
import { Repository } from 'typeorm';
import { CreateMenuDto, QueryMenuDto } from './dto/menu.dot';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  //新增
  async create(createMenuDto: CreateMenuDto) {
    await this.menuRepository.save(createMenuDto);
    return null;
  }

  //翻页
  async getList(offset: number, limit: number, queryMenuDto: QueryMenuDto) {
    const { pageSize, current, ...params } = queryMenuDto;
    const total = await this.menuRepository.count();
    const result = await this.menuRepository
      .createQueryBuilder('menu')
      .skip((offset - 1) * limit)
      .take(limit)
      .where({ ...params })
      .orderBy({ id: 'DESC' })
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
    console.log(id, 'xxx');
    const result = await this.menuRepository.findOneBy({ id });
    result.deleteDate = new Date();
    await this.menuRepository.save(result);
    return null;
  }
}
