import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MONGODB CONNECTED :" + conn.connection.host);
  } catch (error) {
    console.error("Error connecting to mongodb" + error.message);
    process.exit(1);
  }
};
