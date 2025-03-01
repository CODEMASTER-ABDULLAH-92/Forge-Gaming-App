import express from 'express'
import { LoginUser,logoutUser,registerUser } from '../controllers/userController.js'

const UserRouter = express.Router();

UserRouter.post("/LoginUser",LoginUser);
UserRouter.post("/register",registerUser);
UserRouter.post("/logout",logoutUser);
export default UserRouter;