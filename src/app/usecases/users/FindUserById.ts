import { UserRepository } from "../../repositories/implementations/UserRepository";
import { FindUserByIdService } from "../../services/users/FindUserByIdService";
import { FindUserByIdController } from "../../controllers/users/FindUserByIdController";

const userRepository = new UserRepository();

const findUserByIdService = new FindUserByIdService(userRepository);

const findUserByIdController = new FindUserByIdController(findUserByIdService);

export { findUserByIdService, findUserByIdController };
