import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn
} from "typeorm"
import { UsersGroup } from "@entities/users_group.entity"

@Entity()
export class Roles {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column({
		type: "varchar",
		length: 30
	})
	name: string

	@Column({
		type: "varchar",
		length: 100
	})
	description: string

	@CreateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)"
	})
	created_at: Date

	@CreateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)",
		onUpdate: "CURRENT_TIMESTAMP(6)"
	})
	updated_at: Date
}
