import mongoose from "mongoose";

export class Database {
  static open = async (MONGO_URL) => {
    try {
      const connInstance = await mongoose.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
      if (connInstance) {
        console.log(
          `MongoDb Connected Successfully!!! DB HOST: ${connInstance.connection.host}`
        );
      }
    } catch (error) {
      console.log("Catch Block :  Database Open Connection =>", error);
    }
  };

  static close = async () => {
    await mongoose.disconnect();
  };
}