import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Req, Res, UseGuards, UsePipes, ValidationPipe, Version } from "@nestjs/common"
import { JwtAuthGuard } from "@common/guard/jwt-auth.guard"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { CustomersService } from "./customers.service"
import { CreateCustomersDto } from "./dto/create-customers.dto"
import { Request, Response } from "express"
import { UpdateCustomersDto } from "./dto/update-customers.dto"

@Controller("customer")
@ApiTags("Customer")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CustomersController {
	constructor(private customerService: CustomersService) {}

	@Post()
	@Version("1")
	@HttpCode(HttpStatus.CREATED)
	@UsePipes(new ValidationPipe({ transform: true }))
	async create(
		@Body() createDto: CreateCustomersDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const user: any = req.user
		createDto.group = user.group

		const customer = await this.customerService.create(createDto)

		res.json({
			statusCode: HttpStatus.CREATED,
			message: "customer create success",
			data: customer
		})
	}

	@Get()
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async findAll(@Req() req: Request, @Res() res: Response) {
		const supplier = await this.customerService.findAll()

		res.json({
			statusCode: HttpStatus.OK,
			message: "customer list success",
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
		const customer = await this.customerService.findOne(id)

		res.json({
			statusCode: HttpStatus.OK,
			message: "customer find success",
			data: customer
		})
	}

	@Patch(":id")
	@Version("1")
	@HttpCode(HttpStatus.OK)
	@UsePipes(new ValidationPipe({ transform: true }))
	async update(
		@Param("id", ParseUUIDPipe) id: string,
		@Body() updateDto: UpdateCustomersDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const customer = await this.customerService.update(id, updateDto)

		res.json({
			statusCode: HttpStatus.OK,
			message: "customer update success",
			data: customer
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
		const customer = await this.customerService.remove(id)

		res.json({
			statusCode: HttpStatus.OK,
			message: "customer remove success",
			data: customer
		})
	}
}
