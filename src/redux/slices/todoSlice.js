import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: (state, action) => {
            const currentTasks = [...state.tasks]
            const newTask = action.payload
            state.tasks = [...currentTasks, newTask]
        },
        removeTask: (state, action) => {
            const removedId = action.payload.id;
            const filteredTasks = state.tasks.filter(task => task.id !== removedId);
            state.tasks = filteredTasks
        }
    }
})

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice;