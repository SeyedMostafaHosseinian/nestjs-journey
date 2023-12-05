import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    log() {
        console.log('hello im task service');
    }
    
}
