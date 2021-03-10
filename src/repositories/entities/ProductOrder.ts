import { Column, Entity, OneToOne, ManyToOne, JoinColumn, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import Order from './Order';
import Product from './Product';

@Entity('product_orders')
export default class ProductOrder extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @ManyToOne(() => Order, order => order.product_order)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @OneToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

};