import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AlterCompany1615340793247 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('companies', new TableForeignKey({
      name: 'fk_address',
      columnNames: ['address_id'],
      referencedTableName: 'addresses',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('companies', 'fk_address');
  }

}
