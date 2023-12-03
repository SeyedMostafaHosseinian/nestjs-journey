import { Injectable } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class ProdConfigurationService implements ConfigurationService {
    sayMode()  {
        // console.log('hello im ProdConfigurationService')
    }
}
