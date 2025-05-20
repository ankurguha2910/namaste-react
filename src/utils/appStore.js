const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

//Build a Redux store
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;