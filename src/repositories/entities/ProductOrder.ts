import { Column, Entity, OneToOne, ManyToOne, JoinColumn, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import Order from './Order';
import Product from './Product';

@Entity()
export default class ProductOrder extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @ManyToOne(() => Order, order => order.prodOrder)
  order: Order;

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product;

};