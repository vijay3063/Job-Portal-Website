// import express from "express";
// import cors from "cors";
// import 'dotenv/config';
// import connectDB from "./config/db.js";
// import { clerkWebhooks } from "./controllers/webhooks.js";

// // Initialize the express app
// const app = express()

// // Database connection
// await connectDB()

// // Middleware
// app.use(cors())
// app.use(express.json())

// // Routes
// app.get('/', (req, res) => res.send('Welcome to the Job Portal API'))
// app.post('/webhooks',clerkWebhooks)

// // Port
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })

import express from "express";
import cors from "cors";
import 'dotenv/config';
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the express app
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// === ✅ Serve Static Frontend ===
const distPath = path.resolve(__dirname, "../client/dist");
app.use(express.static(distPath));

// === ✅ API Routes ===
app.get("/api", (req, res) => res.send("Welcome to the Job Portal API"));
app.post("/webhooks", clerkWebhooks);

// === ✅ Catch-all Route for React Router ===
app.get("*", (req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});

// Start server (for local dev — Vercel will use "export default app")
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app; // 👈 Important for Vercel
