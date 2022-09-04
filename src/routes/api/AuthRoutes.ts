import { Router } from "express";

const AuthRoutes = Router();

import { authController } from "../../app/usecases/auth/Auth";

AuthRoutes.post("/", (req, res) => authController.handle(req, res));

export default AuthRoutes;
