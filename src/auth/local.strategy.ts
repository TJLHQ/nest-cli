import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  async validate(payload:any): Promise<any> {
    if (!payload) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}