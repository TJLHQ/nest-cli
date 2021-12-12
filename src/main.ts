import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InterceptorInterceptor } from './global/interceptor.interceptor';
import { FilterFilter } from './global/filter.filter';
import { GuardGuard } from './global/guard.guard';
import {ValidationPipe} from './global/validator.pip'
import { CatchMiddleware } from './global/catch.middleware';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.use(new CatchMiddleware().use)
  app.useGlobalInterceptors(new InterceptorInterceptor())
  app.useGlobalFilters(new FilterFilter())
  app.useGlobalGuards(new GuardGuard())
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
