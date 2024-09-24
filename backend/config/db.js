import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config("../.env");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      colors.bgMagenta(`MongoDB Connected: ${connect.connection.host}`)
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
