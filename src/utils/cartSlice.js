import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        //action addItem (reducer function)
        addItem: (state, action) => {
            //modifying the state over here
            //We have to mutate the state
            //Redux toolkit using immer library behind the scene
            state.items.push(action.payload)
        },
        //action addItem
        removeItem: (state) => {
            state.items.pop();
        },
        //action addItem
        //originalState = {items : ["pizza"]}
        clearCart: (state) => {
            //RTK => Either mutate the existing state or return a new state
            //state.items.length = 0 // state = []
            return { items: [] }; // this new [] will be replaced inside originalState = { items: [] }
        }
    }
})
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer