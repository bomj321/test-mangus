import {MigrationInterface, QueryRunner} from "typeorm";

export class ADDCourses1626144983029 implements MigrationInterface {
    name = 'ADDCourses1626144983029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_6562e564389d0600e6e243d9604"`);
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "user_id" integer, "category_id" integer, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
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
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_bb2c8374d6f04bf9301895d1b33" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_2f133fd8aa7a4d85ff7cd6f7c98" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_6562e564389d0600e6e243d9604" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_6562e564389d0600e6e243d9604"`);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_2f133fd8aa7a4d85ff7cd6f7c98"`);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_bb2c8374d6f04bf9301895d1b33"`);
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
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_6562e564389d0600e6e243d9604" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
