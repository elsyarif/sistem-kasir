import {
	BeforeInsert,
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn
} from "typeorm"
import * as slug from "slug"
import { UsersGroup } from "@entities/users_group.entity"

@Entity()
export class Menus {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	parent_id: number

	@Column({
		type: "varchar",
		length: 50
	})
	title: string

	@Column({
		type: "varchar",
		length: 50
	})
	meta_title: string

	@Column({
		type: "varchar",
		length: 50
	})
	icon: string

	@Column({
		type: "varchar"
	})
	link: string

	@Column()
	sort: number

	@Column({
		type: "boolean",
		default: true
	})
	is_active: boolean

	@BeforeInsert()
	assignMetaTitle() {
		this.meta_title = slug(this.title)
	}
}
