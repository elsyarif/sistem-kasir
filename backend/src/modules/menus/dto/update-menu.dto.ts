import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { CreateMenusDto } from "@modules/menus/dto/create-menu.dto"

export class UpdateMenuDto extends PartialType(CreateMenusDto) {}
