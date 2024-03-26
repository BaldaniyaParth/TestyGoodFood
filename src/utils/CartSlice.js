import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = { ...action.payload, totalPrice: action.payload.price };
            state.items.push(newItem);
            console.log(newItem);
        },
        removeItem: (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearItem: (state) => {
            state.items = [];
        },
        updateItemQuantity(state, action) {
            const { itemId, newQuantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.id === itemId);
            if (itemToUpdate) {
              itemToUpdate.quantity = newQuantity;
            }
          },
    }
});

export const { addItem, removeItem, clearItem, updateItemQuantity } = CartSlice.actions;

export default CartSlice.reducer;
