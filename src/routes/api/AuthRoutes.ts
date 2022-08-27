import { Router } from "express";
const AuthRoutes = Router();

import { AuthController } from "../../controllers/auth/AuthController";

AuthRoutes.post("/", new AuthController().handle);

export default AuthRoutes;
