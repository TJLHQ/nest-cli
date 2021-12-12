import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService:JwtService){}
  login(users){
    const token:string=this.jwtService.sign(users)
    return {
      msg:'登录成功',
      token,
      data:users
    }
  }
}
