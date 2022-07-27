import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DatabaseConfig } from "@config/database"
import { APP_GUARD } from "@nestjs/core"
import { JwtStrategy } from "@common/strategy/jwt.strategy"
import { AuthModule } from "@modules/auth/auth.module"
import { UsersModule } from "@modules/users/users.module"
import { RolesModule } from "@modules/roles/roles.module"
import { MenusModule } from "@modules/menus/menus.module"
import { PermissionsModule } from "@modules/permissions/permissions.module"
import { ProductsModule } from "@modules/products/products.module"
import { CategoriesModule } from "@modules/categories/categories.module"
import { OrderModule } from "@modules/order/order.module"
import { CustomersModule } from "@modules/customers/customers.module"
import { SuppliersModule } from "@modules/suppliers/suppliers.module"

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ".env",
			isGlobal: true
		}),
		TypeOrmModule.forRoot(DatabaseConfig),
		AuthModule,
		MenusModule
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: JwtStrategy
		}
	]
})
export class AppModule {}
