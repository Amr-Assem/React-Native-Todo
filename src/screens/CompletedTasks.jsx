import { View, FlatList, Text } from "react-native";
import { styles } from "../styles/styles";
import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function CompletedTasks() {
  const navigation = useNavigation();
  const { tasks } = useSelector((state) => state.todoSlice);

  const [CompletedTasks, setCompletedTasks] = useState([]);
  useEffect(() => {
    setCompletedTasks(tasks.filter((res) => res.completed));
  }, [tasks]);

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
            <TodoItem item={item} navigation={navigation} />
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
