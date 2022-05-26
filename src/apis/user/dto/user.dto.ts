import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空!', each: false })
  userName: string;

  @IsNotEmpty({ message: '真实姓名不能为空!', each: false })
  realName: string;

  @IsNotEmpty({ message: '密码不能为空!', each: false })
  password: string;

  @IsNotEmpty({ message: '重复密码不能为空!', each: false })
  passwordRepeat: string;

  @IsNotEmpty({ message: '性别不能为空!', each: false })
  sex: number;

  @IsNotEmpty({ message: '年龄不能为空!', each: false })
  age: number;

  @IsNotEmpty({ message: '学校不能为空!', each: false })
  school: string;
}
