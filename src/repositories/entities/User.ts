import { v4 as uuid } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Costumers {
  @PrimaryColumn()
  id: string;
  
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
};