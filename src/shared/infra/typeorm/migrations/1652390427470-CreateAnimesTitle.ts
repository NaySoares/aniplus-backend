import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnimesTitle1652390427470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table(
          {
            name: 'animes_title',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
              },
              {
                name: 'name',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'banner',
                type: 'varchar',
              },
              {
                name: 'background',
                type: 'varchar',
              },
              {
                name: 'season',
                type: 'uuid',
                isNullable: true,
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              }
            ]
          }
        ) 
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('animes_title')
    }

}
