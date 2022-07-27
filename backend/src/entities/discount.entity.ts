import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "@entities/users.entity";

@Entity()
export class Discount {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	discount: number;

	@Column({
		type: "enum",
		enum: ["PERCENTAGE", "PRICE"],
		default: "PRICE"
	})
	type: string;

	@Column({
		type: "decimal"
	})
	start_period: Date;

	@Column({
		type: "decimal"
	})
	end_period: number;

	@Column({
		type: "boolean"
	})
	is_active: boolean;

	@ManyToOne(() => Users)
	@JoinColumn({
		foreignKeyConstraintName: 'fk_user_create_discount'
	})
	created_by: string

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
