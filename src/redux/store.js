import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

export default store = configureStore({
    reducer: {
        todoSlice: todoSlice.reducer,
    }
})