import { Column, Entity, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
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

  @OneToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company
};
