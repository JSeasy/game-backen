import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空!' })
  userName: string;

  @IsNotEmpty({ message: '真实姓名不能为空!' })
  realName: string;

  @IsNotEmpty({ message: '密码不能为空!' })
  password: string;

  @IsNotEmpty({ message: '重复密码不能为空!' })
  passwordRepeat: string;

  @IsNotEmpty({ message: '性别不能为空!' })
  sex: number;

  @IsNotEmpty({ message: '年龄不能为空!' })
  age: number;

  @IsNotEmpty({ message: '学校不能为空!' })
  school: string;
}
