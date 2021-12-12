import {IsString,MinLength} from 'class-validator'
export class AuthDto{
  @IsString({message:'输入字符串'})
  @MinLength(2,{message:'用户名不能低于6位数'})
  user:string
  @MinLength(6,{message:'不能低于6位数'})
  passwd:string
}