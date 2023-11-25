import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1700923779666 implements MigrationInterface {
    name = 'Init1700923779666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "content" character varying NOT NULL, "userId" uuid, "conversationId" uuid, CONSTRAINT "PK_45bb3707fbb99a73e831fee41e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "conversation_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "title" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_7ec5ee11cb5dcccb1ba428ee1e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "username" character varying NOT NULL, "firstName" character varying, "middleName" character varying, "lastName" character varying, "email" character varying, "phone" character varying, "avatar" character varying, "isActive" boolean, "password" character varying NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "access_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "token" character varying, CONSTRAINT "PK_37054762735b4a35baab3d185b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD CONSTRAINT "FK_577902780af0407f6dc26aef28b" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD CONSTRAINT "FK_ac8f65d962e6c743c698b20e3fa" FOREIGN KEY ("conversationId") REFERENCES "conversation_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "conversation_entity" ADD CONSTRAINT "FK_1c1d8c893f705a7fad1274dbcdd" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "conversation_entity" DROP CONSTRAINT "FK_1c1d8c893f705a7fad1274dbcdd"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP CONSTRAINT "FK_ac8f65d962e6c743c698b20e3fa"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP CONSTRAINT "FK_577902780af0407f6dc26aef28b"`);
        await queryRunner.query(`DROP TABLE "access_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "conversation_entity"`);
        await queryRunner.query(`DROP TABLE "message_entity"`);
    }

}
