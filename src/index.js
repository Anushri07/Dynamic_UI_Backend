import { Database } from "./lib/database.js";
import { app } from "./server.js";
const PORT = 9000;
const MONGO_URL = "mongodb://localhost:27017/test";

Database.open(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed!! : ", error);
  });
