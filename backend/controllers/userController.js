import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import validator from "validator";

// Create the access token

const createAccessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "15m" });
};
const createRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User doesn't exist" });
    }
    const isMatch = bcrypt.compare(String(password), String(user.password));
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }
    // Generate the Token
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ success: true, message: "Logged In", accessToken });
  } catch (error) {
    console.error("Login Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
const registerUser = async (req, res) => {
    try {
      const { email, password, name } = req.body;
  
      // Check if the user already exists
      const user = await userModel.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }
  
      // Validate input
      if (!email) {
        return res
          .status(400)
          .json({ success: false, message: "Email is required" });
      }
      if (!validator.isEmail(email)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid email format" });
      }
      if (password.length < 8) {
        return res
          .status(400)
          .json({
            success: false,
            message: "Password must be at least 8 characters",
          });
      }
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(String(password), salt);
  
      // Create new user
      const createUser = new userModel({
        email,
        name,
        password: hashedPassword,
      });
      await createUser.save();
  
      // Generate tokens using the newly created user
      const accessToken = createAccessToken(createUser._id);
      const refreshToken = createRefreshToken(createUser._id);
  
      // Set cookies
      res.cookie("token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 15 * 60 * 1000, // 15 minutes
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
  
      return res
        .status(201)
        .json({ success: true, message: "User registered successfully" });
  
    } catch (error) {
      console.error("Error in register:", error);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  

const logoutUser = async (req,res) => {
    try {
        res.clearCookie("accessToken")
        return res.status(200).json({ success: true, message: "Logged out successfully"});
    } catch (error) {
        console.error("LogOut Error",error);   
    }
  }
export { LoginUser, registerUser, logoutUser};
