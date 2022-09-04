import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UpdateUserService } from "../../services/users/UpdateUserService";
import { UpdateUserController } from "../../controllers/users/UpdateUserController";

const userRepository = new UserRepository();

const updateUserService = new UpdateUserService(userRepository);

const updateUserController = new UpdateUserController(updateUserService);

export { updateUserService, updateUserController };
