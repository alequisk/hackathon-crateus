import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ProductOrder from './ProductOrder';

@Entity()
export default class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;

  @Column()
  status: 'pending' | 'done';

	@OneToMany(() => ProductOrder, prodOrder => prodOrder.order)
	prodOrder: ProductOrder
};