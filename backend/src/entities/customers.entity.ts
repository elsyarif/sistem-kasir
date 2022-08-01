import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersGroup } from "@entities/users_group.entity";

@Entity()
export class Customers {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		type: "varchar",
		length: 35
	})
	name: string;

	@Column({
		type: "varchar",
		unique: true,
		foreignKeyConstraintName: 'UQ_email_customer'
	})
	email: string

	@Column({
		type: "varchar"
	})
	address: string;

	@Column({
		type: "varchar"
	})
	phone: string;

	@ManyToOne(() => UsersGroup, (group) => group.id)
	@JoinColumn({
		name: "group_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_customer_user_group"
	})
	group: string

	@CreateDateColumn({
		type: 'timestamp',
		default: () => "CURRENT_TIMESTAMP(6)"
	})
	created_at: Date

	@CreateDateColumn({
		type: 'timestamp',
		default: () => "CURRENT_TIMESTAMP(6)",
		onUpdate: "CURRENT_TIMESTAMP(6)"
	})
	updated_at: Date
}
