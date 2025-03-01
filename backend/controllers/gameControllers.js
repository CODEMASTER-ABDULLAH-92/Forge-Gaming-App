import productModel from "../models/productModel.js";

const addGame = async (req,res)=>{
    try {
        const {price,ImgArray,description,image,gameName} = req.body;

        const gameData = await productModel({
            price,
            ImgArray,
            description,image,gameName
        })
        await gameData.save();
        res.status(200).json({success:true,message:"Game Adding Successfully"});
    } catch (error) {
        console.error("Err In Game",error);
        return res.status(500).json({success:false,message:"Error in adding Game"})
    }
}
const UpdateGame = async (req,res)=>{

}
const removeGame = async (req,res)=>{

}

const ListingGame = async (req,res)=>{

}

export {addGame,UpdateGame,removeGame,ListingGame}