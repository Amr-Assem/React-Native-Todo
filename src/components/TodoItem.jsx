import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";

export default function TodoItem({ item, navigation, toggleTask, removeTask }) {
  return (
    <View style={styles.todoRow}>
      <TouchableOpacity
        style={item.isCompleted ? styles.checked : styles.unchecked}
        onPress={() => {
          toggleTask(item.id);
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("TODO DETAILS", { item })}
        style={{ width: "80%" }}
      >
        <Text style={item.isCompleted ? styles.doneTodo : styles.pendingTodo}>
          {item.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          removeTask(item.id);
        }}
      >
        <Text style={styles.deleteBtnText}>
          <Ionicons name="trash-bin" size={24} color="#d40e41" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
