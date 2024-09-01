import { styles } from "../styles/styles";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  async function loadTasks() {
    const savedTasks = await AsyncStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks([]);
    }
  }

  async function saveTasks(tasks) {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>TODO APP</Text>

      <TodoForm tasks={tasks} setTasks={setTasks} />

      <TodoList tasks={tasks} setTasks={setTasks} />
    </View>
  );
}
