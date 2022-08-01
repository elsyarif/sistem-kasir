import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "@entities/roles.entity";
import { Menus } from "@entities/menus.entity";

@Entity()
export class RolesMenus {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(() => Roles)
	@JoinColumn({
		name: 'role_id',
		referencedColumnName: 'id',
		foreignKeyConstraintName: 'fk_rolemenu_roles'
	})
	role: string

	@ManyToOne(() => Menus)
	@JoinColumn({
		name: 'menu_id',
		referencedColumnName: 'id',
		foreignKeyConstraintName: 'fk_relemenu_menus'
	})
	menu:number
}
