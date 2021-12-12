import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class GuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // authorization
    const req:Request=context.switchToHttp().getRequest();
    const ignorList:Array<string>=['/api/auth/login','/api/cat/getNames']
    const bool=this.ignoreUrl(req,ignorList);
    console.log('bool.......'+bool)
    if(bool){
      return true;
    }
    return new (AuthGuard('jwt'))().canActivate(context);
  }
  private ignoreUrl(req:Request,list:Array<string>):boolean{
    const getUrl:string=req.url;
    console.log(getUrl)
    return list.some(item=>getUrl.includes(item))
  }
}
