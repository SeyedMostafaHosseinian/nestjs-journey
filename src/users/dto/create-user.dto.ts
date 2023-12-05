import { IsNotEmpty, Length, IsOptional, IsEmail } from 'class-validator';

export class CreateUserDto {
  
  @IsNotEmpty({ message: "username should'nt empty" })
  @Length(3, 40)
  readonly username: string;

  @IsEmail()
  @IsNotEmpty({ message: "email should'nt empty" })
  readonly email: string;

  @IsNotEmpty({ message: "password should'nt empty" })
  readonly password: string;

  @IsOptional()
  @Length(3, 20)
  readonly job?: string;
}
