import pkg from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// import { userRepository } from "../../repositories/user/UserRepository";
// import { ApiError } from "../../utils/ApiError";
// import { ApiResponse } from "../../utils/ApiResponse";
// import { configurations } from "../../config/configurations";

const { Request, Response, NextFunction } =pkg;

class UserController {
//   getAllUsers = async (
//     request,
//     response,
//     next
//   ) => {
//     try {
//       const options = request.query;
//       let query = {};
//       if (options.role) {
//         query = {
//           role: options.role === "admin" ? { $eq: "admin" } : { $ne: "admin" },
//         };
//       }
//       const users = await userRepository.getAllUsers(query, {}, {});
//       const userCount = await userRepository.countUsers(query);
//       return response
//         .status(200)
//         .json(
//           new ApiResponse(200, users, Successfully fetched ${userCount} users)
//         );
//     } catch (error) {
//       console.error("UserController getAllUsersData =>", error);
//       next(new ApiError(500, "Failed to fetch users", [error.message]));
//     }
//};

//   getUserById = async (
//     request,
//     response,
//     next
//   ) => {
//     try {
//       const userId = request.params.id;
//       const user = await userRepository.findOneUser({ _id: userId });
//       if (!user) {
//         return response.status(404).json({ error: "User not found" });
//       }
//       response.json(user);
//     } catch (err) {
//       next(err);
//     }
//   };

//   profile = async (request, response, next) => {
//     try {
//       const token = request.header("Authorization");
//       const { jwt_secret } = configurations;
//       const decodedToken = jwt.verify(token, jwt_secret);
//       const user = await userRepository.findOneUser({
//         originalId: decodedToken.data.originalId,
//         deletedAt: null,
//       });
//       if (!user) {
//         throw new ApiError(404, "User not found");
//       }
//       return response
//         .status(200)
//         .json(new ApiResponse(200, user, "Successfully fetched user details"));
//     } catch (error) {
//       console.error("UserController profile =>", error);
//       next(new ApiError(500, "Failed to fetch user profile", [error.message]));
//     }
//   };

//   registerUser = async (
//     request,
//     response,
//     next
//   ) => {
//     try {
//       const { email, password } = request.body;
//       const userExists = await userRepository.findOneUser({ email });
//       if (userExists) {
//         return response.json(
//           new ApiResponse(400, email, "User already exists")
//         );
//       }
//       const hashedPassword = await bcrypt.hash(
//         password,
//         configurations.saltRounds
//       );
//       const newUser = { ...request.body, password: hashedPassword };
//       const createdUser = await userRepository.createUser(newUser, {});
//       return response
//         .status(201)
//         .json(new ApiResponse(201, createdUser, "User successfully created"));
//     } catch (error) {
//       console.error("UserController registerUser =>", error);
//       next(new ApiError(500, "Failed to register user", error));
//     }
//   };

//   updateUser = async (
//     request,
//     response,
//     next
//   ) => {
//     try {
//       const { originalId } = request.params;
//       const updatedData = request.body;
//       const user = await userRepository.updateUser(originalId, updatedData, {});
//       if (!user) {
//         throw new ApiError(404, "User not found");
//       }
//       return response
//         .status(200)
//         .json(new ApiResponse(200, user, "User successfully updated"));
//     } catch (error) {
//       console.error("UserController updateUser =>", error);
//       next(new ApiError(500, "Failed to update user", [error.message]));
//     }
//   };

//   deleteUser = async (
//     request,
//     response,
//     next
//   ) => {
//     try {
//       const { originalId } = request.params;
//       const user = await userRepository.deleteUser(originalId);
//       if (!user) {
//         throw new ApiError(404, "User not found");
//       }
//       return response
//         .status(200)
//         .json(new ApiResponse(200, user, "User successfully deleted"));
//     } catch (error) {
//       console.error("UserController deleteUser =>", error);
//       next(new ApiError(500, "Failed to delete user", [error.message]));
//     }
//   };

//   login = async (request, response, next) => {
//     try {
//       const { email, password } = request.body;
//       const userExists = await userRepository.findOneUser({ email });

//       if (userExists) {
//         const match = await bcrypt.compare(password, userExists.password);
//         if (match) {
//           const { password, ...userWithoutSensitiveInfo } =
//             userExists.toObject();
//           const token = jwt.sign(
//             { data: userWithoutSensitiveInfo },
//             configurations.jwt_secret,
//             { expiresIn: "1h" }
//           );
//           return response
//             .status(200)
//             .json(
//               new ApiResponse(
//                 200,
//                 { token, user: userWithoutSensitiveInfo },
//                 "Logged in successfully"
//               )
//             );
//         } else {
//           return next(new ApiError(400, "Email or password is invalid"));
//         }
//       } else {
//         return next(new ApiError(400, "User does not exist"));
//       }
//     } catch (error) {
//       console.log("CATCH BLOCK : user controller login =>", error);
//       return next(new ApiError(500, "Internal Server Error", [error.message]));
//     }
//   };
}

export default new UserController();