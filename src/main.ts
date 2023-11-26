import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    app.useGlobalPipes(new ValidationPipe());
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`api`, app, document);

    await app.listen(3000);
}
bootstrap();
