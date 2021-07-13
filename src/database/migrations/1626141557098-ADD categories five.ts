import {MigrationInterface, QueryRunner} from "typeorm";

export class ADDCategoriesFive1626141557098 implements MigrationInterface {
    name = 'ADDCategoriesFive1626141557098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_6562e564389d0600e6e243d9604"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "user_id" integer`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name")`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."create_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."update_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_6562e564389d0600e6e243d9604" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_6562e564389d0600e6e243d9604"`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."update_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."create_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "UQ_23c05c292c439d77b0de816b500"`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_6562e564389d0600e6e243d9604" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
