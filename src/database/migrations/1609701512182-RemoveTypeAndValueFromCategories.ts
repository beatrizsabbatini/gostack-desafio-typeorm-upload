import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class RemoveTypeAndValueFromCategories1609701512182
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('categories', 'type');
    await queryRunner.dropColumn('categories', 'value');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'type',
        type: 'string',
      }),
    );

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'value',
        type: 'decimal',
        precision: 10,
        scale: 2,
      }),
    );
  }
}
