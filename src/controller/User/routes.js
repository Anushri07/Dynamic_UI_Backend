import { Router } from "express";
import UserController from './UserController.js';
const userRoute = Router();

userRoute.post('/create', async (req, res) => {
  return UserController.createUser(req, res);
});

userRoute.get('/getAll', async (req, res) => {
  return UserController.getAllUser(req, res);
});

userRoute.delete('/delete/:id', async (req, res) => {
  return UserController.deleteUser(req, res);
});

userRoute.get('/:id', async (req, res) => {
  return UserController.getUser(req, res);
});

userRoute.put('/edit/:id', async (req, res) => {
  return UserController.editUser(req, res);
});

export default userRoute;