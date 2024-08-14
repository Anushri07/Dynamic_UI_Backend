import express, { Request, Response, NextFunction } from "express";
import { router } from "./router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get(
  "/health-check",
  (request, response, next) => {
    response.send("routes working");
  }
);

// app.post(
//   "/mock-data",
//   async (request, response, next) => {
//     try {
//       const seedingData = request.body;
//       const data = await seedUsers(seedingData);
//       response.status(200).json({ status: response.statusCode, data: data });
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       next(error);
//     }
//   }
// );

// app.use(notFound);
// app.use(errorHandler);

export { app };