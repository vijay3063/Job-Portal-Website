import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize the express app
const app = express()

// Database connection
await connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send('Welcome to the Job Portal API'))
app.post('/webhooks',clerkWebhooks)

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
