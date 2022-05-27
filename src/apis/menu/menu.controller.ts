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
<<<<<<< HEAD
import { excuseCurrentPagesizePipe } from 'src/utils/inex';
=======
>>>>>>> 6582f40ebcdbe796c9ae4d90ffe8360a61335357

@Controller('/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/create')
  create(@Body() createMenuDto: CreateMenuDto) {
    console.log(createMenuDto);
    return this.menuService.create(createMenuDto);
  }

<<<<<<< HEAD
  @Get('/list')
  getList(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe)
    current: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query() queryMenuDto: QueryMenuDto,
  ) {
    return this.menuService.findList(current, pageSize, queryMenuDto);
=======
  @Get()
  findAll(@Body() queryMenuDto: QueryMenuDto) {
    return this.menuService.paginate(queryMenuDto);
>>>>>>> 6582f40ebcdbe796c9ae4d90ffe8360a61335357
  }

  @Get('/tree')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
