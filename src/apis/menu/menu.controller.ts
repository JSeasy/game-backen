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
import { excuseCurrentPagesizePipe } from 'src/utils/inex';

@Controller('/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/create')
  create(@Body() createMenuDto: CreateMenuDto) {
    console.log(createMenuDto);
    return this.menuService.create(createMenuDto);
  }

  @Get('/list')
  getList(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe)
    current: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query() queryMenuDto: QueryMenuDto,
  ) {
    return this.menuService.findList(current, pageSize, queryMenuDto);
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
