import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import DeleteModal from "./DeleteModal";
import { markAsCompleted, removeTask } from "../redux/slices/todoSlice";

export default function TodoItem({
  item,
  navigation,
  toggleTask,
  showDeleteModal,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const dispatch = useDispatch();

  /* --------------------------- Show Delete Modal --------------------------- */
  function showDeleteModal(id) {
    setTaskToDelete(id);
    setIsModalVisible(true);
  }

  /* ------------------------------- Remove Task ------------------------------ */
  function handleRemoveTask(id) {
    // setTasks(tasks.filter((task) => task.id !== id));
    dispatch(removeTask(id));
    setIsModalVisible(false);
  }

  /* ------------------------- Toggle Task Completion ------------------------- */
  function toggleTask(id) {
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    //   )
    // );
    dispatch(markAsCompleted(id));
  }

  return (
    <View
      style={{
        ...styles.todoRow,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        flex: 1,
      }}
    >
      <Pressable
        style={item.isCompleted ? styles.checked : styles.unchecked}
        onPress={() => {
          toggleTask(item.id);
        }}
      />
      <Pressable
        onPress={() => navigation.navigate("TODO DETAILS", { item })}
        style={{ flex: 1 }}
      >
        <Text style={item.isCompleted ? styles.doneTodo : styles.pendingTodo}>
          {item.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          showDeleteModal(item.id);
        }}
      >
        <Text style={styles.deleteBtnText}>
          <Ionicons name="trash-bin" size={24} color="#d40e41" />
        </Text>
      </Pressable>

      <DeleteModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleRemoveTask={() => {
          handleRemoveTask(taskToDelete);
        }}
      />
    </View>
  );
}
