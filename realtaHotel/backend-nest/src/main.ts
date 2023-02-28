import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

const port = process.env.PORT || 6000;

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.enableCors();
  // enable validation globally
  // this is from NestJS docs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // enable DI for class-validator
  // this is an important step, for further steps in this article
  useContainer(app.select(MainModule), { fallbackOnErrors: true });

  await app.listen(port, () => {
    console.log('Listen on port ' + port);
  });
}
bootstrap();
