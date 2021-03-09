import { Column, Entity, OneToMany, BaseEntity, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import Product from './Product'

@Entity('companies')
export default class Company extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

	@Column()
	name: string;

  @Column()
  email: string;

  @Column()
  password: string;

	@Column()
	avatar?: string;

	@Column()
	description?: string;

	@Column()
	contact: string;

	@Column()
	street?: string;

	@Column()
	district?: string;

	@Column()
	city?: string;

	@OneToMany(() => Product, products => products.company, {
		cascade: ['insert', 'update']
	})
	@JoinColumn({ name: 'company_id' })
	products: Product[]
};