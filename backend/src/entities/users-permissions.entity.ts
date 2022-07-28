import {
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import { Users } from "@entities/users.entity";
import { Permissions } from "@entities/permissions.entity";
import { Menus } from "@entities/menus.entity";

@Entity()
export class UsersPermissions {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => Users)
	@JoinColumn({
		name: "user_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_users_permissions"
	})
	user: string;

	@ManyToOne(() => Menus)
	@JoinColumn({
		name: "menu_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_menus_user_menu"
	})
	menu: number;

	@ManyToOne(() => Permissions)
	@JoinColumn({
		name: "permission_id",
		referencedColumnName: 'id',
		foreignKeyConstraintName: 'fk_user_permissions'
	})
	permission: string;
}
