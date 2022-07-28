import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "@entities/users.entity";
import { Menus } from "@entities/menus.entity";

@Entity()
export class UsersMenus {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Users)
	@JoinColumn({
		name: "user_id",
		referencedColumnName: "id",
	})
	user: string;

	@ManyToOne(() => Menus)
	@JoinColumn({
		name: "menu_id",
		referencedColumnName: "id",
	})
	menu: number;
}
