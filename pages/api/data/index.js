import User from "@/models/User";
import connectDB from "@/utils/ConnectDB";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const { name } = req.body;
    if (!name || name.lenght <= 3) {
      res.status(422).json({ status: "Failed", message: "Invalid Data" });
      return;
    }

    //Save Data
    // const user = new User({ name });
    // await user.save();

    const user = await User.create({ name });
    console.log(user);

    res
      .status(201)
      .json({ status: "success", message: "Data created.", data: { user } });
  }
}
