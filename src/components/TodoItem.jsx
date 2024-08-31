import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";

export default function TodoItem({ item, navigation, toggleTask, showDeleteModal }) {
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
    </View>
  );
}
