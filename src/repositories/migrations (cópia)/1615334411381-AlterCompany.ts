import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AlterCompany1615334411381 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
  
    await queryRunner.createForeignKey('addresses', new TableForeignKey({
      name: 'fk_company',
      columnNames: ['company_id'],
      referencedTableName: 'companies',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('addresses', 'fk_company');
  }
}
