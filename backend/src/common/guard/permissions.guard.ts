import { PERMISSIONS_KEY } from "@common/decorators";
import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

interface Permissions{}

@Injectable()
export class PermissionsGuard implements CanActivate{
	private readonly logger = new Logger(PermissionsGuard.name)

	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
	    const request   = context.switchToHttp().getRequest()

	    const requiredPermissions = this.reflector.getAllAndOverride<Permissions[]>(
			PERMISSIONS_KEY,[
				context.getHandler(),
				context.getClass()
			],
		);

		this.logger.verbose(requiredPermissions)
		this.logger.verbose(request)

		if(!requiredPermissions){
			return false
		}

	    const resut = requiredPermissions.some((permissions) => {
			console.log(permissions)
			request.user.permissions?.includes(permissions)
		})

		return resut
	}
}
