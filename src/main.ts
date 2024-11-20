import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', {
    exclude: [''],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  ); // Enable global validation with custom error messages
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
