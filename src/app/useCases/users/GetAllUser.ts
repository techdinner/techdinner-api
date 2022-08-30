import { GetAllUserService } from "../../services/users/GetAllUserService";
import { GetAllUserController } from "../../controllers/users/GetAllUserController";
import { TypeORMUserRepository } from "../../repositories/implementations/typeorm/TypeORMUserRepository";

const repository = new TypeORMUserRepository();

const getAllUserService = new GetAllUserService(repository);

const getAllUserController = new GetAllUserController(getAllUserService);

export { getAllUserService, getAllUserController };
