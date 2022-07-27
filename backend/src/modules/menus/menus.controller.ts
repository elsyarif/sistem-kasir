import {
	Body,
	Controller, Get,
	HttpCode,
	HttpStatus,
	Post,
	Req, Res,
	UseGuards,
	UsePipes,
	ValidationPipe,
	Version
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { JwtAuthGuard } from "@common/guard/jwt-auth.guard"
import { MenusService } from "@modules/menus/menus.service"
import { CreateMenusDto } from "@modules/menus/dto/create-menu.dto"
import { Request, Response } from "express"

@Controller("menus")
@ApiTags("Menus")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class MenusController {
	constructor(private menuService: MenusService) {}

	@Version("1")
	@Post()
	@HttpCode(HttpStatus.CREATED)
	@UsePipes(new ValidationPipe({ transform: true }))
	async create(
		@Body() createDto: CreateMenusDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const menu = await this.menuService.create(createDto)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: 'Menu create success',
			data: menu,
		})
	}

	@Get()
	async findAll(
		@Req() req: Request,
		@Res() res: Response
	){
		const user: any = req.user
		const menu = await  this.menuService.findAll(user.id)

		res.json({
			statusCode: HttpStatus.OK,
			message: 'Menu List success',
			data: menu,
		})
	}
}
