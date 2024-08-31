import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 36,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 56,
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    textAlignVertical: "top",
  },
  completed: {
    color: "green",
    fontSize: 14,
    paddingBottom: 8,
  },
  incomplete: {
    color: "red",
    fontSize: 14,
    paddingBottom: 8,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 24,
  },
  doneTodo: {
    // width: "80%",
    textDecorationLine: "line-through",
    fontSize: 16
  },
  pendingTodo: {
    // width: "80%",
    fontSize: 16
  },
  todoRow: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    padding: 12,
    borderBottomColor: "#b0b0b0",
    borderBottomWidth: 1,
  },
  checked: {
    height: 24,
    width: 24,
    backgroundColor: "black",
    borderRadius: 4,
  },
  unchecked: {
    height: 24,
    width: 24,
    borderColor: "#aeaeae",
    borderWidth: 1,
    borderRadius: 4,
  }
});
