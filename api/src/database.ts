import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";
/**
 * sintaxis para que la funcion se ejecute automaticamente
 */
(async () => {
  try {
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        /* user: config.MONGO_USER,
        password: config.MONGO_PASSWORD, */
      } as ConnectOptions
    );
    console.log("Database connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
