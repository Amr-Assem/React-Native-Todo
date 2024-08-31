import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

export default store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})