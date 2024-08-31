import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { StatusBar } from "expo-status-bar";

export default function TodoDetails({ route }) {
  const { item } = route.params; // method 1
  // const { item } = useRoute().params; // method 2
  // I'm just keeping them for reference :)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>TASK DETAILS</Text>
      <Text style={item.isCompleted ? styles.completed : styles.incomplete}>
        {item.isCompleted ? "Completed" : "Incomplete"}
      </Text>
      <Text style={styles.input}>{item.title}</Text>
      <Text multiline={true} style={{ ...styles.input, height: 104 }}>
        {item.description}
      </Text>
    </View>
  );
}
