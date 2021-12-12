import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly role:number){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // role[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）
    const req=context.switchToHttp().getRequest();
    const userRole=req.user.role;
    if(this.role!==undefined&&userRole>this.role){
      throw new BadRequestException('你没有权限操作')
    }
    return true;
  }
}
