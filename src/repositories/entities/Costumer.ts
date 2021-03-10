import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Address from './Address'

@Entity('costumers')
export default class Costumer extends BaseEntity {
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
  phone?: string;

	@ManyToOne(() => Address)
	@JoinColumn({ name: 'address_id' })
	address: Address
};