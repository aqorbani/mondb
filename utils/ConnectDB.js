import mongoose from "mongoose";

export default async function connectDB() {
  try {
    //Connect to DB

    if (mongoose.connections[0].readyState) return;

    mongoose.set("strictQuery", false);
    await mongoose
      .connect(
        "mongodb+srv://aqorbani:oUBk4QEnooiwJk5C@cluster0.snpyoz0.mongodb.net/?retryWrites=true&w=majority",
        {
          serverSelectionTimeoutMS: 10000,
        }
      )
      .then(() => console.log("Database connected!"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}
