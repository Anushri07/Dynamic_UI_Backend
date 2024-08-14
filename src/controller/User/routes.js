import { Router } from "express";
import mongoose from "mongoose";

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

const formSchema = new mongoose.Schema({
  formFields: {
    type: [{
      Field:{type:String, required:true},
      Type:{type:String, required:true},
      Size:{type:Number, required:true},
      Isrequired:{type:Boolean, required:true}
    }],
    required: true
  }
});

const Form = mongoose.model('Form', formSchema);

userRouter.post('/upload-json',async(req, res) => {
  console.log(req.body,"?????");
  const formfields = req.body;
  console.log(formfields,'Form field Successfully');
  const form = new Form({ formfields });
    await form.save();
  res.send('health check is here');
})


// userRouter.delete("/:originalId", user.deleteUser);

export default userRouter;