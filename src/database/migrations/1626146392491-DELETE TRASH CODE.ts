import {MigrationInterface, QueryRunner} from "typeorm";

export class DELETETRASHCODE1626146392491 implements MigrationInterface {
    name = 'DELETETRASHCODE1626146392491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d72eb2a5bbff4f2533a5d4caff9"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_d72eb2a5bbff4f2533a5d4caff"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "customer_id"`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "UQ_23c05c292c439d77b0de816b500"`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name")`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."name" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "customer_id" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_d72eb2a5bbff4f2533a5d4caff" UNIQUE ("customer_id")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d72eb2a5bbff4f2533a5d4caff9" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
