import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateProduct1615324233747 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'title',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'price',
          type: 'float',
          default: 0.0
        },
        {
          name: 'amount',
          type: 'int',
          default: 1
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }

}
