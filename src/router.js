import { userRouter } from "./controller/User/index.js";
import { Router } from "express";
const router = Router();

router.use("/user", userRouter);

export { router };