import { IS_PUBLIC_KEY, ROLES_KEY } from "@common/decorators";
import { Roles } from "@entities/roles.entity";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()],
		);

		const { user } = context.switchToHttp().getRequest();

		const isPublic = this.reflector.getAllAndOverride<boolean>(
			IS_PUBLIC_KEY, [
				context.getHandler(),
				context.getClass()
			]
		)
		
		if(isPublic){
			return true
		}

		if (!requiredRoles) {
			return false;
		}

		return requiredRoles.some((role) =>{
			console.log('RoleGuard: ', role)

			user.role?.includes(role)
		})
	}
}
