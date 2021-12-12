import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './dto/cat.interface';
import {CatDto} from '../schema/cat/cat.dto'
@Injectable()
export class CatService {
  constructor(@InjectModel('users') private readonly catModel:Model<CatDto>){}
  find(){
    return 'hello world'
  }
  async save() {
      const obj:User={
        name:'小白',
        password:'123456',
        phone:'18281881445',
        email:'384434682@qq.com',
        times:new Date().getTime()
      }
      const item=await new this.catModel(obj).save();
      console.log(item)
      return {item};
  }
}
