import { excelRouter } from "./controller/Excel/index.js";
import { Router } from "express";
import { userRouter } from "./controller/User/index.js";
const router = Router();

router.use("/excel", excelRouter);
router.use("/user", userRouter);

export { router };