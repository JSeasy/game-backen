import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
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
  findAll(@Query() queryUserDto: QueryUserDto) {
    console.log(123123);
    console.log(queryUserDto);
    return this.userService.paginate(queryUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
