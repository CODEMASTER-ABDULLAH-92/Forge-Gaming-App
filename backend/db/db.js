// kMSibmgyFIivxmOp

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("Database Connected");
    } catch (error) {
        console.error("MongoDB is not conneceted: ", error);
    }
}
export default connectDB;

