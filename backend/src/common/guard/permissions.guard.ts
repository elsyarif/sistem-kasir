import { PERMISSIONS_KEY } from "@common/decorators";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class PermissionsGuard implements CanActivate{
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
	    const { user }  = context.switchToHttp().getRequest()

	    const requiredPermissions = this.reflector.getAllAndOverride<Permissions[]>(
			PERMISSIONS_KEY,[
				context.getHandler(), 
				context.getClass()
			],
		);
		
		if(!requiredPermissions){
			return false
		}

	    const resut = requiredPermissions.some((permissions) => {
			console.log(permissions)
			user.permissions?.includes(permissions)
		})

		return resut
	}
}
