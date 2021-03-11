import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AltProductAvatar1615362412487 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('products', new TableColumn ({
      name: 'avatar',
      type: 'varchar',
      default: "'default.jpg'"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'avatar');
  }

}
