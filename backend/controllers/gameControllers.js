import productModel from "../models/productModel.js";
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

const addGame = async (req, res) => {
    try {
        const { price, description, gameName } = req.body;
        const ImgArray = req.files || []; 
        console.log("Received files:", ImgArray);

        let imageUrls = [];
        if (ImgArray.length > 0) {
            imageUrls = await Promise.all(
                ImgArray.map(async (item) => {
                    try {
                        if (!item.path) {
                            console.error("File path missing:", item);
                            return null;
                        }

                        if (!fs.existsSync(item.path)) {
                            console.error("File not found:", item.path);
                            return null;
                        }

                        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                        fs.unlinkSync(item.path); // Delete temporary file after upload
                        return result.secure_url;
                    } catch (uploadError) {
                        console.error("Cloudinary Upload Error:", uploadError);
                        return null;
                    }
                })
            );

            // Filter out failed uploads
            imageUrls = imageUrls.filter(url => url !== null);
        }

        console.log("Uploaded image URLs:", imageUrls);

        const gameData = new productModel({
            price,
            description,
            gameName,
            ImgArray: imageUrls // Correct field name
        });

        await gameData.save();
        res.status(200).json({ success: true, message: "Game Added Successfully", imageUrls });
    } catch (error) {
        console.error("Error in adding Game:", error);
        res.status(500).json({ success: false, message: "Error in adding Game" });
    }
};





const removeGame = async (req,res)=>{
    try {
        const {id} = req.params;
        const game = await productModel.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Remove successfully",game});
    } catch (error) {
        console.error("Err in Removing Game",error);    
        res.status(400).json({success:false, message:"Err in Removing"});
    }
}

const ListingGame = async (req,res)=>{
    try {
        const game = await productModel.find({});
        res.status(200).json({success:true, message:"Listing Successfullly",game});
    } catch (error) {
        console.error("Err in Listing",error);
        res.status(400).json({success:false, message:"Err in Listing"});
}
}



const UpdateGame = async (req, res) => {
    const { id } = req.params;
    try {
        const { price, description, gameName } = req.body;
        const ImgArray = req.files || [];
        
        let gamePost = await productModel.findById(id);
        if (!gamePost) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        let imageUrls = gamePost.image || []; // Ensure fallback to empty array

        if (ImgArray.length > 0) {
            // Upload new images to Cloudinary
            let newImageUrls = await Promise.all(
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
                        return null;
                    }
                })
            );

            newImageUrls = newImageUrls.filter(url => url !== null);
            if (newImageUrls.length > 0) {
                imageUrls = newImageUrls; // Replace with new images
            }
        }

        // Update gamePost fields
        gamePost.price = price || gamePost.price;
        gamePost.description = description || gamePost.description;
        gamePost.gameName = gameName || gamePost.gameName;
        if (imageUrls.length > 0) gamePost.image = imageUrls; // Update only if images exist

        await gamePost.save(); // Save changes

        res.status(200).json({ success: true, post: gamePost, message: "Post updated successfully" });
    } catch (error) {
        console.error("Error in Updating Post:", error);
        res.status(500).json({ success: false, message: "Error in updating post" });
    }
};
    
export {addGame,UpdateGame,removeGame,ListingGame}