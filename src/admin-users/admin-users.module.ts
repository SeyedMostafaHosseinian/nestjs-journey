import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[UsersModule],
  providers: [AdminUsersService]
})
export class AdminUsersModule {}
