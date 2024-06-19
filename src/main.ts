import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';

//we need join to synthesize the directory path which will contain templates
import { join } from 'path';

//nunjucks is used as a render engine
import * as nunjucks from 'nunjucks';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication> (
    AppModule,
  );
  //associating nunjucks with express, we need to get the underlying express platform from Nest app
  const express = app.getHttpAdapter().getInstance();

  //getting directory name views (create it in project root directory), which is the root directory for our template files
  const views = join(__dirname,'..','views');

  const staticAssets = join(__dirname,'..', 'static');
  app.useStaticAssets(staticAssets);

  //configuring nunjucks, setting views and express declared above
  nunjucks.configure(views, { express });
  app.enableCors();

  //starting the application
  await app.listen(3000);
}
bootstrap();
