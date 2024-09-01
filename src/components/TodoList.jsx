import { View, FlatList, Pressable, Text } from "react-native";
import { styles } from "../styles/styles";
import React from "react";
import TodoItem from "./TodoItem";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function TodoList() {
  const navigation = useNavigation();
  const { tasks, error, loading } = useSelector((state) => state.todoSlice);

  if (loading)
    return <Text style={{ paddingTop: 24, fontSize: 16 }}>Loading ...</Text>;
  if (error)
    return (
      <Text style={{ paddingTop: 24, fontSize: 16, color: "red" }}>
        {error}
      </Text>
    );
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
    </>
  ) : null;
}
