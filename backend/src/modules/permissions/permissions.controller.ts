import { JwtAuthGuard } from "@common/guard/jwt-auth.guard"
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseUUIDPipe,
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
import { Request, Response } from "express"
import { CreatePermissionsDto } from "./dto/create-permissions.dto"
import { UpdatePermissionsDto } from "./dto/update-permissions.dto"
import { PermissionsService } from "./permissions.service"
import { Permissions, Roles } from '@common/decorators'
import { PermissionsGuard } from "@common/guard/permissions.guard";

@Controller("permissions")
@ApiTags("Permissions")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@UseGuards(PermissionsGuard)
export class PermissionsController {
	constructor(private permissionService: PermissionsService) {}

	@Post()
	@Version("1")
	@HttpCode(HttpStatus.CREATED)
	@UsePipes(new ValidationPipe({ transform: true }))
	async create(
		@Body() createDto: CreatePermissionsDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const permission = await this.permissionService.create(createDto)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "Create permissions success",
			data: permission
		})
	}

	@Roles("permissions.read")
	@Get()
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async findAll(@Req() req: Request, @Res() res: Response) {
		const permission = await this.permissionService.findAll()

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "Create permissions success",
			data: permission
		})
	}

	@Get(":id")
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async findOne(
		@Param("id", ParseUUIDPipe) id: string,
		@Req() req: Request,
		@Res() res: Response
	) {
		const permission = await this.permissionService.findOne(id)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "find permissions success",
			data: permission
		})
	}

	@Patch(":id")
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async update(
		@Param("id", ParseUUIDPipe) id: string,
		@Body() updateDto: UpdatePermissionsDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const permission = await this.permissionService.update(id, updateDto)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "update permissions success",
			data: permission
		})
	}

	@Delete(":id")
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async remove(
		@Param("id", ParseUUIDPipe) id: string,
		@Req() req: Request,
		@Res() res: Response
	) {
		const permission = await this.permissionService.remove(id)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "Delete permissions success",
			data: permission
		})
	}
}
