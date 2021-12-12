import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { User } from '../global/user.decorator';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService:AuthService){}
  @Get('login')
  login(@Query() users:AuthDto){
    return this.authService.login(users);
  }
  @Get('users')
  getUsers(@Query() query:AuthDto,@User() users){
    return {
      query,
      users
    }
  }
}
