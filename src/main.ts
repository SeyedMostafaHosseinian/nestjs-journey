import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthorizationGuard } from './guards/authorization.guard';
import { ApiKeyGuard } from './guards/api-key.guard';
import { LogInterceptor } from './interceptors/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logFunMiddleware);
  app.enableCors();
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // );
  // .useGlobalFilters(new MyFilter())
  // app.useGlobalGuards(new AuthorizationGuard());

  // app.useGlobalGuards(new ApiKeyGuard());
  // app.useGlobalInterceptors(new LogInterceptor())
  await app.listen(3000);
}
bootstrap();
