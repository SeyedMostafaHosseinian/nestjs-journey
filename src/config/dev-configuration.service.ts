import { Injectable } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class DevConfigurationService implements ConfigurationService {
    sayMode()  {
        console.log('hello im DevConfigurationService')
    }
}
