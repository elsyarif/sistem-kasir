import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import * as bcrypt from "bcrypt";
import { Roles } from "@entities/roles.entity";

@Entity()
export class Users {
	@PrimaryGeneratedColumn("uuid", {
		primaryKeyConstraintName: "PK_Users"
	})
	id: string;

	@Column()
	name: string;

	@Column({
		unique: true
	})
	username: string;

	@Column()
	password?: string;

	@Column({
		default: false
	})
	is_active: boolean;

	@ManyToOne(() => Roles)
	@JoinColumn({
		name: "role_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_users_role"
	})
	role: string;

	@CreateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)"
	})
	create_at: Date;

	@CreateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)",
		onUpdate: "CURRENT_TIMESTAMP(6)"
	})
	update_at: Date;

	async hashPassword() {
		this.password = bcrypt.hashSync(this.password, 10);
	}

	async checkPassword?(password: string) {
		return bcrypt.compareSync(password, this.password);
	}
}
