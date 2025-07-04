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

// import express from "express";
// import cors from "cors";
// import 'dotenv/config';
// import path from "path";
// import { fileURLToPath } from "url";

// import connectDB from "./config/db.js";
// import { clerkWebhooks } from "./controllers/webhooks.js";

// // For __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Initialize the express app
// const app = express();

// // Database connection
// await connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Serve static files from the React/Vite build
// app.use(express.static(path.join(__dirname, "../client/dist")));

// // API Routes
// app.get('/api', (req, res) => res.send('Welcome to the Job Portal API'));
// app.post('/webhooks', clerkWebhooks);

// // For all other routes, send the frontend
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

// // Port
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
