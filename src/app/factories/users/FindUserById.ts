import { MysqlFindUserByIdRepository } from "../../../infra/mysql/users/MysqlFindUserByIdRepository";
import { FindUserByIdService } from "../../services/users/FindUserByIdService";
import { FindUserByIdController } from "../../controllers/users/FindUserByIdController";

const repository = new MysqlFindUserByIdRepository();

const service = new FindUserByIdService(repository);

const findUserByIdController = new FindUserByIdController(service);

export { findUserByIdController };
