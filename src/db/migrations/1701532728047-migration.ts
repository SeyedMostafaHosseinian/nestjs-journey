import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1701532728047 implements MigrationInterface {
    name = 'Migration1701532728047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "job" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "job"`);
    }

}
