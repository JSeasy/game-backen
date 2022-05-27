import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto, QueryMenuDto } from './dto/menu.dot';
import { Menu } from './entities/menu.entity';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    await this.menuRepository.save(createMenuDto);
    return;
  }
  async paginate(options: IPaginationOptions): Promise<Pagination<Menu>> {
    return paginate<Menu>(this.menuRepository, options);
  }

  async findList(offset: number, limit: number, queryMenuDto: QueryMenuDto) {
    const { pageSize, current, ...params } = queryMenuDto;
    console.log(params);
    const total = await this.menuRepository.count();
    const result = await this.menuRepository
      .createQueryBuilder('menu')
      .skip((offset - 1) * limit)
      .take(limit)
      .where({ ...params })
      .getMany();

    return {
      total,
      data: result,
      current: offset,
      pageSize: limit,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
