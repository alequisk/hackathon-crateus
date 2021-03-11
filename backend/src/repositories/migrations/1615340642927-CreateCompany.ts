import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompany1615322497598 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'companies',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
          isNullable: false,
        },
        {
          name: 'password',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'avatar',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'contact',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'address_id',
          type: 'varchar'
        }
      ],
    }));
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
