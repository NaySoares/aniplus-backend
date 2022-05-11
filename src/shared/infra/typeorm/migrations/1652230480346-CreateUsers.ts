import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1652230480346 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'username',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'password',
              type: 'varchar',
            },
            {
              name: 'avatar',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'isAdmin',
              type: 'boolean',
              default: false,
            },
            {
              name: 'animes_recents',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'animes_complete',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'animes_dropped',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'wishlist',
              type: 'varchar',
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
    await queryRunner.dropTable('users');
  }
}
