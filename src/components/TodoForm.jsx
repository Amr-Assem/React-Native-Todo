import { styles } from "../styles/styles";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";

export default function TodoForm({ tasks, setTasks }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

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

  return (
    <>
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
    </>
  );
}
