import {IsString,MinLength} from 'class-validator'
export class CatDto{
  @IsString({message:'必须为非空字符'})
  user:string;
  @MinLength(6,{message:'不能小于6位数'})
  passwd:string
}