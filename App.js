import { styles } from "./styles"
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

export default function App() {
  const tasks = [
    { id: 1, title: "React Native Lecture", isCompleted: true },
    { id: 2, title: "React Native Lab", isCompleted: true },
    { id: 3, title: "Read more about React UI Components", isCompleted: false },
  ]

  const renderedTodo = ({ item }) => (
    <View style={styles.todoRow}>
      <TouchableOpacity style={item.isCompleted ? styles.checked : styles.unchecked} />
      <Text style={item.isCompleted ? styles.doneTodo : styles.pendingTodo}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.header}>TODO APP</Text>

        {/* --------------------------------- Input ---------------------------------- */}
        <TextInput
          placeholder="Task"
          style={styles.input}
        />
        <TextInput
          multiline={true}
          placeholder="Description"
          style={{ ...styles.input, height: 104, }}
        />
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
        <View style={{ ...styles.dividerLine, marginVertical: 24 }} />

        {/* --------------------------------- Filter --------------------------------- */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.activeFilterBtn}>
            <Text style={styles.activeFilterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* ------------------------------- To-do List ------------------------------- */}
        <View style={styles.todosContainer}>
          <FlatList
            data={tasks}
            renderItem={renderedTodo}
            keyExtractor={task => task.id}
          />
        </View>

      </View>
    </ScrollView>
  );
}

