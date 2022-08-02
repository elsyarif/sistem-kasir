import { PartialType } from "@nestjs/swagger"
import { CreateCustomersDto } from "./create-customers.dto";

export class UpdateCustomersDto extends PartialType(CreateCustomersDto){}