import express from "express";
import "dotenv/config";  // No need for dotenv.config() since it's handled here
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import UserRouter from "./routes/userRoutes.js";
import gameRouter from "./routes/gameRoutes.js";
import { connectCloudinary } from "./config/multer.js";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors({origin: "http://localhost:5173",credentials:true}));
app.use(morgan("dev"));



//Cloudinary Connection
connectCloudinary();

// DataBase Connection 
connectDB()

// API Routing

app.use("/api/user",UserRouter);
app.use("/api/game",gameRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} (${process.env.PORT || "default 8000"})`));
