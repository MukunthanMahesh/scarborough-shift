import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check route
app.get("/ping", (_, res) => {
  res.send("pong");
});

// Root route
app.get("/", (_, res) => {
  res.send("Welcome to the Scarborough Shift API");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
