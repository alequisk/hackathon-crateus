import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddFKCostumer1615358203109 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('costumers', new TableForeignKey({
      name: 'fk_address_costumer',
      columnNames: ['address_id'],
      referencedTableName: 'addresses',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('costumers', 'fk_address_costumer');
  }

}
