import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateMenusDto {
	@ApiProperty()
	@IsNotEmpty()
	parent_id: number

	@ApiProperty()
	@IsNotEmpty()
	title: string

	@ApiProperty()
	@IsNotEmpty()
	icon: string

	@ApiProperty()
	@IsNotEmpty()
	link: string

	@ApiProperty()
	@IsNotEmpty()
	is_active: boolean

	@ApiProperty()
	@IsNotEmpty()
	sort: number
}
