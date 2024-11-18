import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://SUBHO-STACK:8276958492@cluster0.nl3ml.mongodb.net/jnu-smart-shop').then(()=>console.log("DB connected"));
}