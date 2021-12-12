import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../models/user";

//Create first admin user in database
export class CreateAdminUser1639194882123 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let user = new User();
    user.username = "admin";
    user.password = "admin";
    user.hashPassword();
    user.role = "ADMIN";
    user.firstName = "Hamid";
    user.lastName = "Doost";
    user.email = "hamid@email.com";
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
