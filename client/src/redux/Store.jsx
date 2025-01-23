import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../redux/feature/Game.slice'
export const store = configureStore({
  reducer: {
    game:gameReducer
  },
})