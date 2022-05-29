import { Module } from '@nestjs/common';
import { UserModule } from './apis/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './apis/user/entities/user.entity';
import { MenuModule } from './apis/menu/menu.module';
import { Menu } from './apis/menu/entities/menu.entity';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '118.31.188.117',
      port: 3306,
      username: 'root',
      password: '123123',
      database: 'test',
      entities: [User, Menu],
      synchronize: true,

      // timezone: '+08:00',

      dateStrings: true,
      // driver: require('mysql2'),
    }),
    MenuModule,
  ],
  providers: [],
})
export class AppModule {}
