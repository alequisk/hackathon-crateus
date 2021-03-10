import {MigrationInterface, QueryRunner, Table} from 'typeorm';
export class CreateOrder1615328496732 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orders',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'date',
          type: 'timestamp',
          isNullable: true
        },
        {
          name: 'status',
          type: 'enum',
          enum: ['pending', 'done']
        }
      ],
      foreignKeys: [
        {
          name: 'fk_product_order',
          columnNames: ['product_order_id'],
          referencedTableName: 'product_orders',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
