import { styles } from "../styles/styles";
import { View, Text, Modal, Pressable } from "react-native";
import React from "react";

export default function DeleteModal({
  isModalVisible,
  setIsModalVisible,
  handleRemoveTask,
}) {
  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Confirm Deletion</Text>
          <Text style={styles.modalText}>
            Are you sure you want to delete this task?
          </Text>
          <View style={styles.modalActions}>
            <Pressable
              style={styles.cancelBtn}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={styles.deleteBtn}
              onPress={() => handleRemoveTask()}
            >
              <Text style={styles.deleteBtnText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
