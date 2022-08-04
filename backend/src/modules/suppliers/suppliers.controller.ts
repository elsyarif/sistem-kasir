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
import { JwtAuthGuard } from "@common/guard/jwt-auth.guard"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { SuppliersService } from "./suppliers.service"
import { Request, Response } from "express"
import { CreateSupplierDto } from "./dto/create-suppliers.dto"
import { UpdateSupplierDto } from "./dto/update-suppliers.dto"

@Controller("supplier")
@ApiTags("Supplier")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class SupplierController {
	constructor(private supplierService: SuppliersService) {}

	@Post()
	@Version("1")
	@HttpCode(HttpStatus.CREATED)
	@UsePipes(new ValidationPipe({ transform: true }))
	async create(
		@Body() createDto: CreateSupplierDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const user: any = req.user
		createDto.group = user.group

		const supplier = await this.supplierService.create(createDto)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "Supplier create success",
			data: supplier
		})
	}

	@Get()
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async findAll(@Req() req: Request, @Res() res: Response) {
		const supplier = await this.supplierService.findAll()

		res.json({
			statusCode: HttpStatus.OK,
			message: "Supplier list success",
			data: supplier
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
		const supplier = await this.supplierService.findOne(id)

		res.json({
			statusCode: HttpStatus.OK,
			message: "Supplier find success",
			data: supplier
		})
	}

	@Patch(":id")
	@Version("1")
	@HttpCode(HttpStatus.OK)
	@UsePipes(new ValidationPipe({ transform: true }))
	async update(
		@Param("id", ParseUUIDPipe) id: string,
		@Body() updateDto: UpdateSupplierDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const supplier = await this.supplierService.update(id, updateDto)

		res.json({
			statusCode: HttpStatus.OK,
			message: "Supplier update success",
			data: supplier
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
		const supplier = await this.supplierService.remove(id)

		res.json({
			statusCode: HttpStatus.OK,
			message: "Supplier remove success",
			data: supplier
		})
	}
}
