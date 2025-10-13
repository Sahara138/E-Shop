import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./feature/viewSlice";
import counterReducer from "./feature/counterSlice";
import paginationReducer from "./feature/paginationSlice";
import cartReducer from "./feature/cartSlice";

export const store = configureStore({
    reducer:{
        view: viewReducer,
        count: counterReducer,
        pagination: paginationReducer,
        cart: cartReducer,
    }
})