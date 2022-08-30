import { Router } from "express";
const AuthRoutes = Router();

import { AuthController } from "../../app/controllers/auth/AuthController";

AuthRoutes.post("/", new AuthController().handle);

export default AuthRoutes;
