import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotIn } from "class-validator";

export class RegisterUsersDto {
	@ApiProperty()
	@IsNotEmpty()
	name: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsNotIn(["test", "testing", "coba"])
	username: string;

	@ApiProperty()
	@IsNotEmpty()
	password: string;

	@ApiProperty()
	role: string;
}
