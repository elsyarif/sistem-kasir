import { Module } from "@nestjs/common"
import { MenusService } from "./menus.service"
import { MenusController } from "./menus.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Menus } from "@entities/menus.entity"

@Module({
	imports: [TypeOrmModule.forFeature([Menus])],
	exports: [TypeOrmModule],
	providers: [MenusService],
	controllers: [MenusController]
})
export class MenusModule {}
