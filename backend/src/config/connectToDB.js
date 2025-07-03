import mongoose from "mongoose";

export const ConnectToDataBase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);

    console.log(`✅ Connected to MongoDB: ${connection.connection.host}`);
  } catch (err) {
    console.error("❌ Connection to DB Failed:", err.message);
    process.exit(1);
  }
};
