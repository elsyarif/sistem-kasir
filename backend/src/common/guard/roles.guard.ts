import { IS_PUBLIC_KEY, ROLES_KEY } from "@common/decorators"
import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { Roles } from "@entities/roles.entity"

@Injectable()
export class RolesGuard implements CanActivate {
	private readonly logger = new Logger(RolesGuard.name)

	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()]
		)

		const isPublic = this.reflector.getAllAndOverride<boolean>(
			IS_PUBLIC_KEY,
			[context.getHandler(), context.getClass()]
		)

		if (isPublic) {
			return true
		}

		if (!requiredRoles) {
			return false
		}

		const { user } = context.switchToHttp().getRequest()

		return requiredRoles.some((role) => user.role?.includes(role))
	}
}
