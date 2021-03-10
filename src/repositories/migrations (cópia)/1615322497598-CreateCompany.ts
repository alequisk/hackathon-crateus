import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";
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
      foreignKeys: [
        {
          name: 'fk_address',
          columnNames: ['address_id'],
          referencedTableName: 'addresses',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
