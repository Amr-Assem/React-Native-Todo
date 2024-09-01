import { styles } from "../styles/styles";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/slices/todoSlice";

export default function Home() {
  /* -------------------------------------------------------------------------- */
  /*                      AsyncStorage + UseState --> Redux                     */
  /* -------------------------------------------------------------------------- */

  // const [tasks, setTasks] = useState([]);
  const { tasks } = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  async function loadTasks() {
    // await AsyncStorage.clear()
    const savedTasks = await AsyncStorage.getItem("tasks");
    const tasksArray = JSON.parse(savedTasks);
    if (savedTasks) {
      // setTasks(JSON.parse(savedTasks));
      tasksArray.forEach((task) => {
        dispatch(addTask(task));
      });
    } else {
      console.log("EMPTY");
      // setTasks([]);
    }
  }

  async function saveTasks(tasks) {
    if (tasks.length) {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>TODO APP</Text>

      <TodoForm />

      <TodoList />
    </View>
  );
}
