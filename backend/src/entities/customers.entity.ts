import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
