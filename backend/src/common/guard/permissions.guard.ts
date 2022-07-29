import { RolesEnum } from "@common/action";
import { PERMISSIONS_KEY } from "@common/decorators";
import { UsersService } from "@modules/users/users.service";
import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

interface Permissions{}

@Injectable()
export class PermissionsGuard implements CanActivate{
	private readonly logger = new Logger(PermissionsGuard.name)

	constructor(
		private reflector: Reflector, 
		private userService: UsersService
	) {}

	canActivate(context: ExecutionContext): boolean {
	    const {user}   = context.switchToHttp().getRequest()

	    const requiredPermissions = this.reflector.getAllAndOverride<Permissions[]>(
			PERMISSIONS_KEY,[
				context.getHandler(),
				context.getClass()
			],
		);

		if(user.role === RolesEnum.ADMIN){
			console.log('isAdmin :', user.role)
			return true
		}

		if(!requiredPermissions){
			return false
		}

	    const resut = requiredPermissions.some((permissions) => {
			console.log(permissions)
			return user.permissions?.includes(permissions)
		})

		console.log('pers:',resut)
		return resut
	}
}
