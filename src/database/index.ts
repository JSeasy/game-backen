import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

const database = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '118.31.188.117',
        port: 3306,
        username: 'root',
        password: '123123',
        database: 'test',
        entities: [__dirname + '../apis/**/entities/*.entity{.ts}'],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];

@Module({
  providers: [...database],
  exports: [...database],
})
export class DatabaseModule {}
