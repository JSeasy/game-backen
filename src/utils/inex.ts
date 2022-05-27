import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class excuseCurrentPagesizePipe implements PipeTransform<Object> {
  transform(value: Object, metadata: ArgumentMetadata) {
    console.log(value);
    return 1;
  }
}
