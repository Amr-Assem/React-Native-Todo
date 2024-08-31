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
    width: "90%",
  },
  doneTodo: {
    textDecorationLine: "line-through",
    fontSize: 16
  },
  pendingTodo: {
    fontSize: 16
  },
  todoRow: {
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
  },

  /* ------------------------------- Modal Style ------------------------------ */
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 8
  },
  cancelBtn: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1
  },
  cancelBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  deleteBtn: {
    backgroundColor: "#d40e41",
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
  },
  deleteBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
