import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
