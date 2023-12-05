import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TestPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata)
    console.log(metadata.metatype)
    console.log(typeof metadata.metatype)
    console.log(new metadata.metatype().username)
    
    return value;
  }
}
