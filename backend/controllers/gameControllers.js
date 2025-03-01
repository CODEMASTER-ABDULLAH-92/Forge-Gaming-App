import productModel from "../models/productModel.js";
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

const addGame = async (req,res)=>{
    try {
        const {price,description,gameName} = req.body;

        const ImgArray = req.files || []; 
        let imageUrls = [];
        if (ImgArray.length > 0) {
            imageUrls = await Promise.all(
                ImgArray.map(async (item) => {
                    try {
                        if (!fs.existsSync(item.path)) {
                            console.error("File not found:", item.path);
                            return null;
                        }
                        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                        fs.unlinkSync(item.path); // Delete temporary file after upload
                        return result.secure_url;
                    } catch (uploadError) {
                        console.error("Cloudinary Upload Error:", uploadError);
                        return null; // Handle failed uploads gracefully
                    }
                })
            );
            imageUrls = imageUrls.filter(url => url !== null); // Remove null values
        }
        console.log(imageUrls);
        const gameData = await productModel({
            price,
            description,
            gameName,
            ImgArray:imageUrls
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


const addPost = async (req,res) => {
    try {
        const {title,content,createdAt} = req.body;
        // const image = req.files || []; 
        // let imageUrls = [];
        // if (image.length > 0) {
        //     imageUrls = await Promise.all(
        //         image.map(async (item) => {
        //             try {
        //                 if (!fs.existsSync(item.path)) {
        //                     console.error("File not found:", item.path);
        //                     return null;
        //                 }

        //                 let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
        //                 fs.unlinkSync(item.path); // Delete temporary file after upload
        //                 return result.secure_url;
        //             } catch (uploadError) {
        //                 console.error("Cloudinary Upload Error:", uploadError);
        //                 return null; // Handle failed uploads gracefully
        //             }
        //         })
        //     );
        //     imageUrls = imageUrls.filter(url => url !== null); // Remove null values
        // }
        // console.log(imageUrls);
        const postData = new PostModel({
            title,
            content,
            createdAt,
            image:imageUrls
        })
        await postData.save();
        res.json({success:true, message:"Adding Post", postData})
    } catch (error) {
        console.error("Error Adding Trainer:", error);
        res.status(500).json({ success: false, message: "Error in adding Post" });
    }
}