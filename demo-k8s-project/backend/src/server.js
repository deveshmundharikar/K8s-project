import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 3000;

connectDB();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
