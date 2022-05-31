import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { DrawService } from './draw.service';
import { CreateDrawDto } from './dto/create-draw.dto';
import { UpdateDrawDto } from './dto/update-draw.dto';

@Controller('/draw')
export class DrawController {
  constructor(private readonly drawService: DrawService) {}

  @Post()
  create(@Body() createDrawDto: CreateDrawDto) {
    return this.drawService.create(createDrawDto);
  }

  @Get()
  findAll() {
    return this.drawService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drawService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrawDto: UpdateDrawDto) {
    return this.drawService.update(+id, updateDrawDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawService.remove(+id);
  }
}
