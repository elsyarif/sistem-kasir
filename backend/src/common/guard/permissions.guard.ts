import { RolesEnum } from "@common/action"
import { PERMISSIONS_KEY } from "@common/decorators"
import {
	CanActivate,
	ExecutionContext,
	Injectable,
	Logger
} from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { DataSource, Repository } from "typeorm"
import { UsersPermissions } from "@entities/users-permissions.entity"

interface Permissions {}

@Injectable()
export class PermissionsGuard implements CanActivate {
	private readonly logger = new Logger(PermissionsGuard.name)

	constructor(private reflector: Reflector, private dataSource: DataSource) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const dataSource = this.dataSource.createQueryRunner()
		const { user } = context.switchToHttp().getRequest()

		let arrPermission = []

		const requiredPermissions = this.reflector.getAllAndOverride<
			Permissions[]
		>(PERMISSIONS_KEY, [context.getHandler(), context.getClass()])

		const permissions = await dataSource.manager
			.getRepository(UsersPermissions)
			.query(
				`SELECT p.id, p.name, m.meta_title
						  FROM users_permissions up
						LEFT JOIN permissions p ON up.permission_id = p.id
						INNER JOIN menus m ON up.menu_id = m.id
			          	WHERE up.user_id = ?`,
				[user.id]
			)

		for (let i = 0; i < permissions.length; i++) {
			arrPermission.push(
				permissions[i].meta_title + "." + permissions[i].name
			)
		}

		if (user.role === RolesEnum.ADMIN) {
			console.log("isAdmin :", user.role)
			return true
		}

		if (!requiredPermissions) {
			return false
		}

		return requiredPermissions.some((permissions) => {
			return arrPermission?.includes(permissions)
		})
	}
}
