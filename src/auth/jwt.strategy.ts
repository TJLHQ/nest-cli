import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { constance } from './constance';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: constance.secretOrKey,
    });
  }

  // JWT验证 - Step 4: 被守卫调用
  async validate(payload: any) {
    const {iat,exp,...item}=payload
    return item
  }
}