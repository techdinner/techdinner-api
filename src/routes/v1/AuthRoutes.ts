import { Router } from "express";

import { makeAuthController } from "../../app/factories/auth/AuthFactory";

const AuthRoutes = Router();

const authController = makeAuthController();

AuthRoutes.post("/", async (req, res) => await authController.handle(req, res));

export default AuthRoutes;
