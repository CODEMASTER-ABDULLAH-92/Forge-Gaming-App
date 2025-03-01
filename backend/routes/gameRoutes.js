import express from 'express'
import { UpdateGame,ListingGame,removeGame,addGame } from '../controllers/gameControllers.js'

const gameRouter = express.Router();

gameRouter.post("/addGame",addGame);
gameRouter.put("/update",UpdateGame);
gameRouter.delete("/remove",removeGame);
gameRouter.get("/listing",ListingGame);
export default gameRouter
