import express from"express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'

//app config
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB()

//API endpoints
app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.send("API Working");
});

app.listen(PORT,()=>{
    console.log(`Server is started on http://localhost:${PORT}`);
});

