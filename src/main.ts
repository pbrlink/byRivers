import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const DEFAULT_HOST = '127.0.0.1';
const DEFAULT_PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(
    process.env.PORT || DEFAULT_PORT,
    process.env.HOST || DEFAULT_HOST,
  );
}
bootstrap();
