import { app } from "./server.js";
// import express, { Request, Response, NextFunction } from "express";
const PORT = 9000;
// const app = express();
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});