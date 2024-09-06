import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://yotod:yotod@cluster0.ucnxp.mongodb.net/todo-app');
    console.log("db connected");
};
