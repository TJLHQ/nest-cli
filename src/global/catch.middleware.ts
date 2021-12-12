import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import {Request,Response,NextFunction} from 'express'
@Injectable()
export class CatchMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try{
     // req.query={user:'aaabbbbba',passwd:'123456789999999'}
      next();
    }catch (e) {
      throw new BadRequestException(e)
    }

  }
}
