import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Req,
	Res,
	UseGuards,
	UsePipes,
	ValidationPipe,
	Version
} from "@nestjs/common"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { JwtAuthGuard } from "@common/guard/jwt-auth.guard"
import { MenusService } from "@modules/menus/menus.service"
import { CreateMenusDto } from "@modules/menus/dto/create-menu.dto"
import { Request, Response } from "express"
import { UpdateMenuDto } from "./dto/update-menu.dto"
import { Action, RolesEnum } from "@common/action"
import { PermissionsGuard } from "@common/guard/permissions.guard"
import { Permissions } from "@common/decorators"

@Controller("menus")
@ApiTags("Menus")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class MenusController {
	constructor(private menuService: MenusService) {}

	@Post()
	@Version("1")
	@HttpCode(HttpStatus.CREATED)
	@UseGuards(PermissionsGuard)
	@Permissions(Action.MENU_CREATE)
	@UsePipes(new ValidationPipe({ transform: true }))
	async create(
		@Body() createDto: CreateMenusDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const menu = await this.menuService.create(createDto)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "Menu create success",
			data: menu
		})
	}

	@Get()
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async findAll(@Req() req: Request, @Res() res: Response) {
		const user: any = req.user
		const menu = await this.menuService.findMenuByUser(user.id)

		res.json({
			statusCode: HttpStatus.OK,
			message: "Menu List success",
			data: menu
		})
	}

	@Get("/all")
	@Version("1")
	async menuList(@Res() res: Response) {
		const menu = await this.menuService.findAll()

		res.json({
			statusCode: HttpStatus.OK,
			message: "Menu List success",
			data: menu
		})
	}

	@Get(":id")
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async findOne(
		@Param("id", ParseIntPipe) id: number,
		@Req() req: Request,
		@Res() res: Response
	) {
		const menu = await this.menuService.findOne(id)

		res.json({
			statusCode: HttpStatus.OK,
			message: "Menu find success",
			data: menu
		})
	}

	@Patch(":id")
	@Version("1")
	@UseGuards(PermissionsGuard)
	@Permissions(Action.MENU_UPDATE)
	@UsePipes(new ValidationPipe({ transform: true }))
	async update(
		@Param("id", ParseIntPipe) id: number,
		@Body() updateDto: UpdateMenuDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const menu = await this.menuService.update(id, updateDto)

		res.json({
			statusCode: HttpStatus.OK,
			message: "Update Menu success",
			data: menu
		})
	}

	@Delete(":id")
	@Version("1")
	@UseGuards(PermissionsGuard)
	@Permissions(Action.MENU_DELETE)
	async delete(
		@Param("id", ParseIntPipe) id: number,
		@Req() req: Request,
		@Res() res: Response
	) {
		const menu = await this.menuService.update(id, { is_active: false })

		res.json({
			statusCode: HttpStatus.OK,
			message: "Disable Menu success",
			data: menu
		})
	}

	@Get('access')
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async menus(@Req() req: Request, @Res() res: Response){
		const user:any = req.user
		const menu = await this.menuService.roleMenus(user.role)

		res.json({
			statusCode: HttpStatus.OK,
			message: "Menu List success",
			data: menu
		})
	}
}
