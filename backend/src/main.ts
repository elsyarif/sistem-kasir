import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { VersioningType } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import * as cookieParser from "cookie-parser"
import helmet from "helmet"

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: ["error", "debug", "verbose", "warn"]
	})

	app.enableVersioning({
		type: VersioningType.URI
	})

	app.enableCors()
	app.use(cookieParser())
	app.use(helmet())

	const config = new DocumentBuilder()
		.addBearerAuth()
		.setTitle("e-commerce")
		.setDescription("e-commerce Restfull API")
		.setVersion("1.0.1")
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup("api", app, document)

	await app.listen(+process.env.PORT, () => {
		console.log(
			`⚡ [server]: Server is running ${process.env.NODE_ENV} at http://localhost:${process.env.PORT}`
		)
	})
}

bootstrap().then()
