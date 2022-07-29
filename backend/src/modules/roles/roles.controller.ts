import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Res,
	HttpStatus,
	Version,
	UseGuards,
	HttpCode,
	ParseUUIDPipe
} from "@nestjs/common"
import { RolesService } from "./roles.service"
import { CreateRoleDto } from "./dto/create-role.dto"
import { UpdateRoleDto } from "./dto/update-role.dto"
import { Response } from "express"
import { RolesGuard } from "@common/guard/roles.guard"
import { Roles } from "@common/decorators"
import { RolesEnum } from "@common/action"
import { JwtAuthGuard } from "@common/guard/jwt-auth.guard"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"

@Controller("roles")
@ApiTags("Roles")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class RolesController {
	constructor(private readonly rolesService: RolesService) {}

	@Post()
	@Version("1")
	@UseGuards(RolesGuard)
	@Roles(RolesEnum.ADMIN)
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() createRoleDto: CreateRoleDto, @Res() res: Response) {
		const role = await this.rolesService.create(createRoleDto)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "create role success",
			data: role
		})
	}

	@Get()
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async findAll(@Res() res: Response) {
		const role = await this.rolesService.findAll()

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "list role success",
			data: role
		})
	}

	@Get(":id")
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async findOne(
		@Param("id", ParseUUIDPipe) id: string,
		@Res() res: Response
	) {
		const role = await this.rolesService.findOne(id)

		res.json({
			statusCode: HttpStatus.OK,
			message: "create find success",
			data: role
		})
	}

	@Patch(":id")
	@Version("1")
	@Roles(RolesEnum.ADMIN)
	@HttpCode(HttpStatus.OK)
	async update(
		@Param("id") id: string,
		@Body() updateRoleDto: UpdateRoleDto,
		@Res() res: Response
	) {
		const role = await this.rolesService.update(id, updateRoleDto)

		res.json({
			statusCode: HttpStatus.OK,
			message: "update find success",
			data: role
		})
	}

	@Delete(":id")
	@Version("1")
	@Roles(RolesEnum.ADMIN)
	async remove(@Param("id") id: string, @Res() res: Response) {
		const role = await this.rolesService.remove(id)

		res.json({
			statusCode: HttpStatus.OK,
			message: "remove find success",
			data: role
		})
	}
}
