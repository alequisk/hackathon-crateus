import {MigrationInterface, QueryRunner, Table} from "typeorm";
export class CreateProductOrder1615329679449 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'product_orders',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid'
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
        }
      ],
      foreignKeys: [
        {
          name: 'fk_product',
          columnNames: ['product_id'],
          referencedTableName: 'product',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        {
          name: 'fk_order',
          columnNames: ['order_id'],
          referencedTableName: 'order',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      ]
    }));
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('product_orders');
  }
}
