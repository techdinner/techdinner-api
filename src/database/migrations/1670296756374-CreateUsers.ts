import type { QueryRunner, MigrationInterface } from "typeorm";
import { Table } from "typeorm";

export class CreateUsers1670296756374 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "company_id",
            type: "uuid",
          },
          {
            name: "role",
            type: "varchar",
          },
          {
            name: "photo",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "verified",
            type: "boolean",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
