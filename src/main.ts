import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  var port = process.env.PORT || 3000;
  app.listen(port, "0.0.0.0", function() {
    console.log("Listening on Port 3000");
    });
}
bootstrap();
