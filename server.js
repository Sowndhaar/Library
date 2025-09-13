
import express from "express";

import bookRoutes from "./routes/books.route.js";
import connectDB from "./lib/db.js";

const app = express();
app.use(express.json());
const PORT = 3000;
connectDB();


app.get("/", (req, res) => {
  res.json(" Library Management API is running");
});

app.use("/books",bookRoutes);

app.listen(PORT, (err) => {
  console.log(`Server running on port http://localhost:${PORT}`);
} );