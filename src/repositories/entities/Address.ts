import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
export default class Address extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  number: number;

	@Column()
	street: string;

	@Column()
	district: string;

	@Column()
	city: string;

	@Column()
	state: string;
};