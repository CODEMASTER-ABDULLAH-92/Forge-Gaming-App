import express from 'express'
import upload from '../middleware/multermiddleware.js';
import { UpdateGame,ListingGame,removeGame,addGame } from '../controllers/gameControllers.js'

const gameRouter = express.Router();

gameRouter.post("/addGame",upload.array("ImgArray", 5),addGame);
gameRouter.put("/update/:id",UpdateGame);
gameRouter.delete("/remove/:id",removeGame);
gameRouter.get("/listing",ListingGame);
export default gameRouter;