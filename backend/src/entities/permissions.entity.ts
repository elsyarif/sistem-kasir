import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Permissions{
	@PrimaryGeneratedColumn('uuid')
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
		type: 'timestamp',
		default: () => "CURRENT_TIMESTAMP(6)"
	})
	create_at: Date

	@CreateDateColumn({
		type: 'timestamp',
		default: () => "CURRENT_TIMESTAMP(6)",
		onUpdate: "CURRENT_TIMESTAMP(6)"
	})
	update_at: Date
}
