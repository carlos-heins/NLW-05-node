import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1619051240724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                    columns: [
                        {
                            name: "id",
                            type: "uuid", // verificar se essa é a escrita certa
                            isPrimary: true
                        },
                        {
                            name: "username",
                            type: "varchar"
                        },
                        {
                            name: "chat",
                            type: "boolean",
                            default: true
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                        //Horas são salvas com a utc que é a hora universal.
                    ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.dropTable("settings")
    }

}
