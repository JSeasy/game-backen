import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto, QueryMenuDto } from './dto/menu.dot';

@Controller('/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/create')
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  findAll(@Body() queryMenuDto: QueryMenuDto) {
    return this.menuService.paginate(queryMenuDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
