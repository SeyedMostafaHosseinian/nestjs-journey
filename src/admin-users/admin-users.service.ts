import { Injectable } from '@nestjs/common';
import { TasksService } from '../users/tasks/tasks.service';

@Injectable()
export class AdminUsersService {
    constructor(private readonly tasksService: TasksService) {
        this.tasksService.log()
    }
}
