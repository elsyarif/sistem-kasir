import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import { Orders } from "@entities/orders.entity";
import { Products } from "@entities/products.entity";

@Entity()
export class OrdersDetails {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => Orders)
	@JoinColumn({
		name: "order_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_order_order-detail"
	})
	order: string;

	@ManyToOne(() => Products)
	@JoinColumn({
		name: "product_id",
		referencedColumnName: "id",
		foreignKeyConstraintName: "fk_order_products"
	})
	product: string;

	@Column()
	quantity: number;

	@Column({
		type: "decimal"
	})
	price: number;

	@Column({
		type: "decimal"
	})
	total: number;
}
