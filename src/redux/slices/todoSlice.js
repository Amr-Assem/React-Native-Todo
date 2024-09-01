import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        tasks: [
            { id: 1, title: "React Native Lecture", isCompleted: true },
            { id: 2, title: "React Native Lab", isCompleted: true },
            { id: 3, title: "Read more about React UI Components", isCompleted: false },
        ],
    },
    reducers: {
        addTask: (state, action) => {
            const currentTasks = [...state.tasks]
            const newTask = action.payload
            state.tasks = [...currentTasks, newTask]
        },
        removeTask: (state, action) => {
            const removedId = action.payload;
            const filteredTasks = state.tasks.filter(task => task.id !== removedId);
            state.tasks = filteredTasks
        },
        markAsCompleted: (state, action) => {
            const completedId = action.payload;
            const updatedTasks = state.tasks.map((task) =>
                task.id === completedId ? { ...task, isCompleted: !task.isCompleted } : task
            )
            state.tasks = updatedTasks
        }

    }
})

export const { addTask, removeTask, markAsCompleted } = todoSlice.actions;
export default todoSlice;