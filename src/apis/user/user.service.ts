import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { userName } = createUserDto;
    const result = await this.usersRepository.findOneBy({ userName });
    if (!result) {
      await this.usersRepository.save(createUserDto);
      return '注册成功';
    } else {
      throw new BadRequestException('用户已存在');
    }
  }

  async paginate(QueryUserDto) {
    const users = await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.menus', 'menus')
      .getMany();
    return users;
  }

  login(userLoginDto) {
    return this.jwtService.sign(userLoginDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
