import { View, FlatList, Pressable, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles";
import DeleteModal from "./DeleteModal";
import TodoItem from "./TodoItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { markAsCompleted, removeTask } from "../redux/slices/todoSlice";

export default function TodoList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.todoSlice);

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

  return tasks.length ? (
    <>
      <View style={{ ...styles.dividerLine, marginVertical: 24 }} />

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

      <DeleteModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleRemoveTask={() => {
          handleRemoveTask(taskToDelete);
        }}
      />
    </>
  ) : null;
}
