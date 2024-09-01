import { View, FlatList, Pressable, Text } from "react-native";
import { styles } from "../styles/styles";
import React, { useEffect, useState } from "react";
import DeleteModal from "../components/DeleteModal";
import TodoItem from "../components/TodoItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { markAsCompleted, removeTask } from "../redux/slices/todoSlice";

export default function CompletedTasks() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.todoSlice);
  const [CompletedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    setCompletedTasks(tasks.filter((res) => res.isCompleted));
  }, [tasks]);

  /* --------------------------- Show Delete Modal --------------------------- */
  function showDeleteModal(id) {
    setTaskToDelete(id);
    setIsModalVisible(true);
  }

  /* ------------------------------- Remove Task ------------------------------ */
  function handleRemoveTask(id) {
    dispatch(removeTask(id));
    // setTasks(tasks.filter((task) => task.id !== id));
    setIsModalVisible(false);
  }

  /* ------------------------- Toggle Task Completion ------------------------- */
  function toggleTask(id) {
    dispatch(markAsCompleted(id));
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    //   )
    // );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {CompletedTasks.length ? "COMPLETED" : "NO TASKS"}
      </Text>

      <View style={styles.todosContainer}>
        {/* Method 1: Using FlatList */}
        <FlatList
          data={CompletedTasks}
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
