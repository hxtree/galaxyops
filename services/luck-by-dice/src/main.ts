// used in development
import { writeFileSync } from 'fs';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as pkg from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.HEADER,
    header: 'Accept-Version',
    defaultVersion: '1',
  });

  const config = new DocumentBuilder()
    .setTitle(pkg.name)
    .setVersion(pkg.version)
    .setDescription(pkg.description)
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-lambda-token',
        in: 'header',
        description: 'The API key for lambda request.',
      },
      'lambda',
    )
    // .addServer()) // TODO add varies endpoints
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // update the openapi-spec
  writeFileSync('./openapi-spec.json', JSON.stringify(document));

  await app.listen(3000);
}

bootstrap();
