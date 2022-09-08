import { MysqlGetAllUserRepository } from "../../../infra/mysql/users/MysqlGetAllUserRepository";
import { GetAllUserService } from "../../services/users/GetAllUserService";
import { GetAllUserController } from "../../controllers/users/GetAllUserController";

const repository = new MysqlGetAllUserRepository();

const service = new GetAllUserService(repository);

const getAllUserController = new GetAllUserController(service);

export { getAllUserController };
