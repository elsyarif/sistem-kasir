import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateCustomersDto {
    @ApiProperty()
    @IsNotEmpty()
    name:string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @ApiProperty()
    @IsNotEmpty()
    address:string

    @ApiProperty()
    @IsNotEmpty()
    phone:string
    group:string
}