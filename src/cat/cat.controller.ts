import {
  Controller,
  Get,
  Body,
  Query,
  Param,
  UsePipes,
  Request,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';
import { User } from '../global/user.decorator';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {
  }

  @Get('/getNames')
  @UsePipes(new ValidationPipe())
  getName(@Query() query: CatDto, @User() user) {
    return {
      message: '错误哈哈哈哈',
      data: {
        query,
        user: 'user',
      },
    };
  }

  @Get('id/:id')
  getId(@Param('id', new ParseIntPipe()) id) {
    return id;
  }

  @Get('users')
  users(@User() user) {
    return { data: user };
  }

  @Get('save')
  save() {
    return this.catService.save();
  }
}
