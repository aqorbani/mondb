export default function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;
    if (!name || name.lenght <= 3) {
      res.status(422).json({ status: "Failed", message: "Invalid Data" });
      return;
    }
    res
      .status(201)
      .json({ status: "success", message: "Data created.", data: { name } });
  }
}
