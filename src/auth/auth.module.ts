import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { constance } from './constance';
@Module({
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController],
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: constance.secretOrKey,
      signOptions: { expiresIn: '1h' }, // token 过期时效
    }),
  ]
})
export class AuthModule {}
