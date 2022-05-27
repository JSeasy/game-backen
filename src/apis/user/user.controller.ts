import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, QueryUserDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/regist')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/list')
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query() queryUserDto: QueryUserDto,
  ) {
    return this.userService.paginate({ ...queryUserDto, page, limit });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
