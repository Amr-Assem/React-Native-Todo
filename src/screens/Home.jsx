import { styles } from "../styles/styles";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import TodoItem from "../components/TodoItem";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "React Native Lecture",
      description: "Task 1 description",
      isCompleted: true,
    },
    {
      id: 2,
      title: "React Native Lab",
      description: "Task 2 description",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Read more about React UI Components",
      description: "Task 3 description",
      isCompleted: false,
    },
  ]);

  /* -------------------------------- Add Task -------------------------------- */
  function addTask() {
    if (taskTitle) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle("");
      setTaskDescription("");
    } else {
      Alert.alert("Task title is required!");
    }
  }

  /* ------------------------------- Remove Task ------------------------------ */
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  /* ------------------------- Toggle Task Completion ------------------------- */
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>TODO APP</Text>

      {/* --------------------------------- Input ---------------------------------- */}
      <TextInput
        placeholder="Task"
        style={styles.input}
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TextInput
        multiline={true}
        placeholder="Description"
        style={{ ...styles.input, height: 104 }}
        value={taskDescription}
        onChangeText={setTaskDescription}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={addTask}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <View style={{ ...styles.dividerLine, marginVertical: 24 }} />

      {/* --------------------------------- Filter --------------------------------- */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* ------------------------------- To-do List ------------------------------- */}
      <View style={styles.todosContainer}>
        {/* Method 1: Using FlatList */}
        <FlatList
          data={tasks}
          // Renders a list of items based on this data

          renderItem={({ item }) => (
            <TodoItem
              item={item}
              navigation={navigation}
              toggleTask={toggleTask}
              removeTask={removeTask}
            />
          )}
          // Each item receives "item" (the data itself)
          // and "navigation" because I couldn't use navigation from within the component

          keyExtractor={(task) => task.id}
        />

        {/* Method 2: I had issues with FlatList (I've fixed it) */}
        {/* {tasks.map((task) => (
          <TodoItem item={task} key={task.id} />
        ))} */}
      </View>
    </View>
  );
}
