import { styles } from "../styles/styles";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import TodoItem from "../components/TodoItem";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const navigation = useNavigation();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  /* ------------------------------ Async Storage ----------------------------- */
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

  /* -------------------------------- Add Task -------------------------------- */
  function addTask() {
    if (taskTitle) {
      const newTask = {
        id: Date.now().toString(),
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

  /* ------------------------- Show Delete Modal ------------------------- */
  function showDeleteModal(id) {
    setTaskToDelete(id);
    setIsModalVisible(true);
  }

  /* ------------------------------- Remove Task ------------------------------ */
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    setIsModalVisible(false); // Hide the modal after deletion
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
      <Pressable style={styles.submitBtn} onPress={addTask}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
      <View style={{ ...styles.dividerLine, marginVertical: 24 }} />

      {/* --------------------------------- Filter --------------------------------- */}
      <View style={styles.filterContainer}>
        <Pressable style={styles.activeFilterBtn}>
          <Text style={styles.activeFilterText}>All</Text>
        </Pressable>
        <Pressable style={styles.filterBtn}>
          <Text style={styles.filterText}>Active</Text>
        </Pressable>
        <Pressable style={styles.filterBtn}>
          <Text style={styles.filterText}>Done</Text>
        </Pressable>
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
              showDeleteModal={showDeleteModal}
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

      {/* ------------------------ Delete Confirmation Modal ----------------------- */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Deletion</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete this task?
            </Text>
            <View style={styles.modalActions}>
              <Pressable
                style={styles.cancelBtn}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.deleteBtn}
                onPress={() => removeTask(taskToDelete)}
              >
                <Text style={styles.deleteBtnText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
