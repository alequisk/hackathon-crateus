import { Column, Entity, OneToMany, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import Product from './Product'
import Address from './Address'

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

	@Column('text')
	description?: string;

	@Column()
	contact: string;

	@OneToOne(() => Address)
	@JoinColumn({ name: 'address_id' })
	address: Address

	@OneToMany(() => Product, products => products.company, {
		cascade: ['insert', 'update']
	})
	@JoinColumn({ name: 'company_id' })
	products?: Product[]
};