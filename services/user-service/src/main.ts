// used in development
import { writeFileSync } from 'fs';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import packageJson from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.HEADER,
    header: 'Accept-Version',
    defaultVersion: '1',
  });

  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setVersion(packageJson.version)
    .setDescription(packageJson.description)
    .addServer('http://localhost:3000', 'Local')
    .addServer('https://auth.sandbox.nekosgate.com/', 'Sandbox')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // update the openapi-spec
  writeFileSync('./openapi-spec.json', JSON.stringify(document));

  await app.listen(3000);
}
bootstrap();
