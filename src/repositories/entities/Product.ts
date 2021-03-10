import { Column, Entity, ManyToOne, BaseEntity, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import Company from './Company'

@Entity('products')
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column()
  amount: number;

  @Column()
  avatar?: string;

  @Column()
  price: number;

  @ManyToOne(() => Company, company => company.products)
  @JoinColumn({ name: 'company_id' })
  company: Company
};
