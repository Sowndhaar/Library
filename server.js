import express from "express";
import connectDB from "./lib/db.js";
import bookRoutes from "./routes/routebook.js";
const app = express();
const PORT = 3000;
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  res.json("Library Management API is running...");
});
app.use("/books", bookRoutes);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
