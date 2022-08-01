import {
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm"
import { Users } from "@entities/users.entity"
import { Customers } from "@entities/customers.entity"
import moment from "moment"
import { UsersGroup } from "@entities/users_group.entity"

@Entity()
export class Orders {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column({
		type: "varchar",
		length: 21
	})
	invoice: string

	@CreateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)"
	})
	order_date: Date

	@Column()
	quantity: number

	@Column({
		type: "decimal"
	})
	grand_total: number

	@Column()
	paid: number

	@Column()
	discount: number

	@ManyToOne(() => Users)
	@JoinColumn({
		name: "user_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_order_users"
	})
	user: string

	@ManyToOne(() => Customers)
	@JoinColumn({
		name: "customer_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_order_customer"
	})
	customer: string

	@Column({
		type: "enum",
		enum: ["PAID", "PENDING", "UNPAID", "PROCESS"],
		default: "PROCESS"
	})
	status: string

	@ManyToOne(() => UsersGroup, (group) => group.id)
	@JoinColumn({
		name: "group_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_order_user_group"
	})
	group: string

	@BeforeInsert()
	async assignInvoice(count: string) {
		const date = moment().format("DDMMYYYY")
		this.invoice = `INV${date}${count}`
	}
}
