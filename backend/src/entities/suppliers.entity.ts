import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersGroup } from "@entities/users_group.entity";

@Entity()
export class Suppliers{
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
		foreignKeyConstraintName: "fk_supplier_user_group"
	})
	group: string
}
