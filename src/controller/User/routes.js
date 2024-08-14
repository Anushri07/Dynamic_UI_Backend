import { Router } from "express";
import user from "./userController.js";
// import { userValidation } from "./validation";
// import { validationHandler, authMiddleware } from "../../lib";

const userRouter = Router();

// userRouter.post("/login", validationHandler(userValidation.login), user.login);

// userRouter.get("/profile", authMiddleware, user.profile);

// userRouter.get("/", authMiddleware, user.getAllUsers);

// userRouter.get("/:originalId", authMiddleware, user.getUserById);

// userRouter.post(
//   "/",
//   // validationHandler(userValidation.create),
//   user.registerUser
// );

// userRouter.put(
//   "/:originalId",
//   authMiddleware,
//   validationHandler(userValidation.update),
//   user.updateUser
// );

userRouter.get('/health-check', (req, res) => {
  res.send('health check is here');
})

// userRouter.delete("/:originalId", user.deleteUser);

export default userRouter;