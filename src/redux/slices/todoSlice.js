import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    `todos/fetchAll`,
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
        return (await response.json())
    }
)

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        tasks: [],
        loading: true,
        error: ''
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
                task.id === completedId ? { ...task, completed: !task.completed } : task
            )
            state.tasks = updatedTasks
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.tasks = action.payload
            state.loading = false
        }).addCase(fetchTodos.rejected, (state, action) => {
            state.error = "Something went wrong"
            state.loading = false
        })
    }
})

export const { addTask, removeTask, markAsCompleted } = todoSlice.actions;
export default todoSlice;