import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình CORS
  app.enableCors({
    credentials: true,
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3000', // Cho phép chỉ domain này truy cập vào API
    methods: 'GET,POST,PUT,DELETE', // Các phương thức HTTP được phép
    allowedHeaders: 'Content-Type, Accept', // Các header được phép
  });

  // Cấu hình tiền tố toàn cục cho các API endpoint
  app.setGlobalPrefix('api', {
    exclude: [''],
  });

  // Sử dụng ValidationPipe toàn cục
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Lọc bỏ các thuộc tính không hợp lệ
    }),
  );

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
