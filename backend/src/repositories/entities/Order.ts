import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn } from 'typeorm';
import ProductOrder from './ProductOrder';

@Entity('orders')
export default class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  date: Date;

  @Column({
    type: 'enum',
    enum: ['pending', 'done'],
    default: 'pending'
  })
  status: 'pending' | 'done';

	@OneToMany(() => ProductOrder, prodOrder => prodOrder.order)
  @JoinColumn({ name: 'product_order_id' })
	product_order: ProductOrder[];
};