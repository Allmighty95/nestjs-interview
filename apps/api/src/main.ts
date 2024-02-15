import { Logger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { createSwaggerDocument, getApp, globalPrefix } from '@ocmi/api/bootstrap';
import * as process from 'process';
import * as bodyParser from 'body-parser'; 

async function bootstrap() {
  const app = await getApp();

  const document = createSwaggerDocument(app);

  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  
  app.use(bodyParser.json());

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
