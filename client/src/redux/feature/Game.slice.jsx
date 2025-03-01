import { createSlice } from '@reduxjs/toolkit';
import { battle } from '../../assets/asset';
const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem('cart'); // Get the saved cart from localStorage
  return savedState ? JSON.parse(savedState) : { value: {} }; // Parse it if it exists, or return a default state
};
const initialState = loadStateFromLocalStorage();

export const counterSlice = createSlice({
  name: 'game',
  initialState,
  battle,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state.value[itemId]) {
        state.value[itemId] = 1;
      } else {
        state.value[itemId] += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.value[itemId]) {
        if (state.value[itemId] > 1) {
          state.value[itemId] -= 1;
        } else {
          delete state.value[itemId];
        }
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    getcartCount: (state)=>{

    },
    clearCart: (state) => {
      state.value = {};
      // Remove cart from localStorage
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = counterSlice.actions;

export default counterSlice.reducer;
