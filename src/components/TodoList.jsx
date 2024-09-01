import { View, FlatList, Pressable, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles";
import DeleteModal from "./DeleteModal";
import TodoItem from "./TodoItem";
import { useNavigation } from "@react-navigation/native";

export default function TodoList({ tasks, setTasks }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const navigation = useNavigation();

  /* ------------------------- Show Delete Modal ------------------------- */
  function showDeleteModal(id) {
    setTaskToDelete(id);
    setIsModalVisible(true);
  }

  /* ------------------------------- Remove Task ------------------------------ */
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    setIsModalVisible(false);
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
    <>
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

      {/* <TodoList tasks={tasks} setTasks={setTasks} /> */}
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
        removeTask={() => {
          removeTask(taskToDelete);
        }}
      />
    </>
  );
}
