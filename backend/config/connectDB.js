import mongoose from "mongoose";

const connectDB = async () => {
  try {
      mongoose.set("strictQuery", false);
    const connect =  mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connect');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
