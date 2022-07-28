import { Roles } from "@common/decorators";
import { JwtAuthGuard } from "@common/guard/jwt-auth.guard";
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards, UsePipes, ValidationPipe, Version } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Request, Response } from "express";
import { AssignMenuDto } from "./dto/assign-menus.dto";
import { AssignPermissionDto } from "./dto/assign-permission.dto";
import { UsersService } from "./users.service";

@Controller("users")
@ApiTags("Users")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UsersController {
	constructor(private userService: UsersService) {}

	@Get("profile")
	@Version("1")
	@HttpCode(HttpStatus.OK)
	async profile(@Req() req: Request, @Res() res: Response) {
        const user = req.user
		const result = user
        
		res.json({
            statusCode: HttpStatus.OK,
			message: "user profile success",
			data: result
		})
	}
    
    @Roles('Adminstrator')
    @Post('assign-permissions')
    @Version("1")
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe({ transform: true }))
    async assignPermission(
        @Body() assinDto: AssignPermissionDto, 
        @Req() req: Request, @Res() res: Response
        ){
        const {...result} = assinDto

        res.json({
			statusCode: HttpStatus.OK,
			message: "user assign permissions success",
			data: result
		})
    }
    
    @Roles('Admin')
    @Post('assign-menus')
    @Version("1")
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe({ transform: true }))
    async assignUserMenu(
        @Body() assinDto: AssignMenuDto, 
        @Req() req: Request, @Res() res: Response
    ){
        const {...result} = assinDto

        res.json({
			statusCode: HttpStatus.OK,
			message: "user assign permissions success",
			data: result
		})
    }
}