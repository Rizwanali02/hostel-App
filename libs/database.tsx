import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const mongoUri = 'mongodb+srv://rizwanali02hindoli:rizwan@rizwan.3wi1xyu.mongodb.net/product-db?retryWrites=true&w=majority';

    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in the environment variables");
    }

    const insaConnection = await mongoose.connect(mongoUri);
    console.log(`---Database connected: ${insaConnection.connection.host}`);
  } catch (error:any) {
    console.log(`Error connecting database: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnection;
