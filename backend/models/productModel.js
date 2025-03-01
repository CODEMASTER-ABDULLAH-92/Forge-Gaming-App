import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    gameName:{type:String},
    price:{type:String},
    ImgArray:{type:Array},
    description:{type:String},
    image:{type:String},
},{timestamps:true})

const productModel = mongoose.models.game || mongoose.model("game",productSchema);
export default productModel;