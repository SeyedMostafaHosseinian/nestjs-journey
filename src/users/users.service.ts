import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  Response,
  UseFilters,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MyFilter } from '../exception-filters/my.filter';

@Injectable()
export class UsersService {
  instanceID: string;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userReposiory: Repository<UserEntity>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    const { username, email } = createUserDto;

    //check exist user
    const existUsers = await this.userReposiory
      .createQueryBuilder('user')
      .where('user.email= :email', { email })
      .orWhere('user.username= :username', { username })
      .getMany();

    if (existUsers.length) {
      if (existUsers.find((user) => user.username === username)) {
        throw new ConflictException('user with this username existed');
      }
      if (existUsers.find((user) => user.email === email)) {
        throw new ConflictException('user with this email existed');
      }
    }

    const newUser = this.userReposiory.create(createUserDto);
    const result = await this.userReposiory.save(newUser);
    return result;
  }

  async findAll() {
    return await this.userReposiory.find();
  }

  async findOne(id: string, user?: CreateUserDto) {
    // throw new HttpException('User not found!', HttpStatus.NOT_FOUND, {
    //   cause: 'cause: user  not found',
    //   description: 'description: please insert correct params',
    // });
    return await this.userReposiory.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
