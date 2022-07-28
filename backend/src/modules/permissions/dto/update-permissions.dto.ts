import { PartialType } from "@nestjs/swagger";
import { CreatePermissionsDto } from "./create-permissions.dto";

export class UpdatePermissionsDto extends PartialType(CreatePermissionsDto){}