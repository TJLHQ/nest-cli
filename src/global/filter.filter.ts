import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import {Request,Response} from 'express'
@Catch()
export class FilterFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx=host.switchToHttp();
    const req=ctx.getRequest<Request>()
    const res=ctx.getResponse<Response>()
    const code=exception instanceof HttpException?exception.getStatus():HttpStatus.BAD_REQUEST;
    console.log("code"+code)
    // response: { statusCode: 400, message: [ '不能低于6位数' ], error: 'Bad Request' },
    const message=exception.message;
    // if(exception.getResponse()){
    //   message=(exception.getResponse() as any).message
    // }else {
    //   message=exception.message
    // }
    const info={
      statusCode:code,
      message,
      url:req.url,
      timestamp:new Date().getTime()
    }
    res.status(code).json(info)
  }
}
