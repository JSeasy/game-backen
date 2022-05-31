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
  Request,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto, QueryMenuDto } from './dto/menu.dot';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard('jwt'))
@Controller('/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    console.log(createMenuDto, 'xxx');
    return this.menuService.create(createMenuDto);
  }

  @Get()
  getList(
    // @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    // @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query() queryMenuDto: QueryMenuDto,
    @Request() requset: any,
  ) {
    console.log(requset.user);
    return this.menuService.getList(queryMenuDto);
  }

  @Get('/tree')
  getTree() {
    return this.menuService.getTree();
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.menuService.delete(id);
  }
}
