import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import userRoutes from './routes/users.js';
import characterRoutes from "./routes/characterRoutes.js";
import raceRoutes from "./routes/raceRoutes.js";
import classRoutes from "./routes/classRoutes.js";

dotenv.config();
connectDB();

const app = express();

//Middleware
app.use(cors({
	origin: [
		"https://aetherionrealm.netlify.app",
    	"http://localhost:4173",
		"http://localhost:5173"
	],
	credentials: true
}));
app.use(express.json());

//routes
app.use('/api/users', userRoutes);
app.use("/api/characters", characterRoutes); 
app.use("/api/races", raceRoutes);         
app.use("/api/classes", classRoutes);  

//Start route
app.get('/', (req, res) => res.send({ message: 'Aetherion Realm API is running...' }));

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});