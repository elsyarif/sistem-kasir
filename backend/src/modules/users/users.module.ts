import { Module } from "@nestjs/common"
import { UsersService } from "./users.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Users } from "@entities/users.entity"
import { UsersTokens } from "@entities/users-tokens.entity"
import { Permissions } from "@entities/permissions.entity"
import { UsersPermissions } from "@entities/users-permissions.entity"
import { UsersController } from "./users.controller"
import { UsersMenus } from "@entities/users-menus.entity"
import { UsersGroup } from "@entities/users_group.entity"

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Users,
			UsersTokens,
			UsersPermissions,
			UsersMenus,
			Permissions,
			UsersGroup
		])
	],
	exports: [TypeOrmModule],
	providers: [UsersService],
	controllers: [UsersController]
})
export class UsersModule {}
