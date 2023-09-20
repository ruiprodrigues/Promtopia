import mongoose from "mongoose";

let isConnnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUniFiedTopology: true,
    });

    isConnnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
