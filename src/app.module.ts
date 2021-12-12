import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    CatModule, AuthModule,
    MongooseModule.forRoot('mongodb://localhost/cat',{useNewUrlParser: true,useCreateIndex:true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
