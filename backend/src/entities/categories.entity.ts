import {
	AfterInsert,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn, ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn
} from "typeorm";
import slug from "slug"
import { UsersGroup } from "@entities/users_group.entity"
import { Users } from "@entities/users.entity"

@Entity()
export class Categories {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column({
		type: "varchar",
		length: 35
	})
	name: string

	@Column({
		type: "varchar",
		unique: true
	})
	slug: string

	@Column()
	image: string

	@Column({
		type: "enum",
		enum: ["PUBLISH", "DRAFT"],
		default: "PUBLISH"
	})
	status: string

	@ManyToOne(() => UsersGroup, (group) => group.id)
	@JoinColumn({
		name: "group_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_category_user_group"
	})
	group: string

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

	@AfterInsert()
	assignSlug() {
		this.slug = slug(this.name)
	}
}
