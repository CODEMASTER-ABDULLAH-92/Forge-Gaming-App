import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
},{timestamps:true});

const userModel = mongoose.models.user || mongoose.model("user",userSchema)
export default userModel;