import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { User } from '../user/entities/user.entity';
import { JwtStrategy } from 'src/core/jwt';
import { PassportModule } from '@nestjs/passport';
const jwtConstants = {
  secret: 'secretKey',
};
@Module({
  controllers: [MenuController],
  providers: [MenuService, JwtStrategy],
  imports: [TypeOrmModule.forFeature([Menu, User]), PassportModule],
})
export class MenuModule {}
