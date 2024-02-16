import User from "@/models/User";
import connectDB from "@/utils/ConnectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to server..." });
  }
  if (req.method === "POST") {
    const { name } = req.body;
    if (!name || name.lenght <= 3) {
      res.status(422).json({ status: "Failed", message: "Invalid Data" });
      return;
    }

    try {
      const user = await User.create({ name });

      res
        .status(201)
        .json({ status: "success", message: "Data created.", data: { user } });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message: "Error in connecting to server... (insert)",
      });
    }
  }
}
