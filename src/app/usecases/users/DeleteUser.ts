import { UserRepository } from "../../repositories/implementations/UserRepository";
import { DeleteUserService } from "../../services/users/DeleteUserService";
import { DeleteUserController } from "../../controllers/users/DeleteUserController";

const userRepository = new UserRepository();

const deleteUserService = new DeleteUserService(userRepository);

const deleteUserController = new DeleteUserController(deleteUserService);

export { deleteUserService, deleteUserController };
