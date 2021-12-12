import {  ArgumentMetadata,  Injectable,  PipeTransform,  BadRequestException} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      // 遍历全部的错误信息,返回给前端
      const errorMessage = errors.map(item => {
        return {
          [item.property]: item.value,
          errMsg: Object.values(item.constraints)[0],
        };
      });
      throw new BadRequestException(JSON.stringify(errorMessage));
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}