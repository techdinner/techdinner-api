import { UserRepository } from "../../repositories/implementations/UserRepository";
import { GetAllUserService } from "../../services/users/GetAllUserService";
import { GetAllUserController } from "../../controllers/users/GetAllUserController";

const userRepository = new UserRepository();

const getAllUserService = new GetAllUserService(userRepository);

const getAllUserController = new GetAllUserController(getAllUserService);

export { getAllUserService, getAllUserController };
