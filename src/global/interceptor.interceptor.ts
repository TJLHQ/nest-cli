import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class InterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx=context.switchToHttp();
    const req:Request=ctx.getRequest<Request>();
    return next.handle().pipe(
      map(data=>{
        return {
          statusCode:HttpStatus.OK,
          timestamp:new Date().getTime(),
          url:req.url,
          ...data,
        }
      })
    );
  }
}
