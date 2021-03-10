import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AlterProductCompany1615342080557 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('products', new TableForeignKey({
      name: 'fk_company',
      columnNames: ['company_id'],
      referencedTableName: 'companies',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products', 'fk_company');
  }

}
