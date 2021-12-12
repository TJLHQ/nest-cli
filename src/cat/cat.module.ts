import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schema/cat/cat-schema';
@Module({
  imports:[MongooseModule.forFeature([{name:'users',schema:UserSchema}])],
  providers: [CatService],
  controllers: [CatController]
})
export class CatModule {}
