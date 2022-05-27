import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  DefaultValuePipe,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto, QueryMenuDto } from './dto/menu.dot';

@Controller('/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    console.log(createMenuDto);
    return this.menuService.create(createMenuDto);
  }

  @Get()
  getList(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query() queryMenuDto: QueryMenuDto,
  ) {
    return this.menuService.getList(current, pageSize, queryMenuDto);
  }

  @Get('/tree')
  getTree() {
    return this.menuService.getTree();
  }
}
