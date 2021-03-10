import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateAddress1615327270554 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'addresses',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'number',
          type: 'int',
          isNullable: false
        },
        {
          name: 'district',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'street',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'city',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'state',
          type: 'varchar',
          isNullable: false
        },
      ],
      foreignKeys: [
        {
          name: 'fk_company',
          columnNames: ['company_id'],
          referencedTableName: 'companies',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses');
  }

}
