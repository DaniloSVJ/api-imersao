import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // ou um array de domínios ['http://site1.com', 'http://site2.com']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // permite cookies
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
