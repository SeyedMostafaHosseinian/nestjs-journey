import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject('ALIAS_USER_SERVICE_TOKEN')
    private readonly usersService2: UsersService,
    @Inject('PROVIDER_BY_USE_FACTORY')
    private readonly factoryValue: any,
  ) {
    console.log(this.factoryValue);
    console.log(
      'this.usersService === usersService2',
      this.usersService === this.usersService2,
    );
    console.log(this.usersService.instanceID)
    console.log(this.usersService2.instanceID)
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('handling request');
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
