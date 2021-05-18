import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('Telephoto API')
		.setDescription('API for serving up photos to the Telephoto webapp')
		.setVersion(process.env.VERSION ?? '0.0.1')
		.addTag('Telephoto')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('docs', app, document)
	await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
