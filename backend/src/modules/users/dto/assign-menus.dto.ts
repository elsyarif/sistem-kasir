import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsUUID } from "class-validator"

export class AssignMenuDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    user_id: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    menu_id: number
}