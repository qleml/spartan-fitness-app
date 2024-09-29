import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <Content />
    </View>
  );
}

interface Todo {
  value: string;
  intValue: number;
}

export function Content() {
  const db = useSQLiteContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<Todo>('SELECT * FROM todos');
      setTodos(result);
    }
    setup();
  }, []);

  const addTodo = async () => {
    if (newTodo.trim() === '') return;
    const intValue = todos.length + 1;
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', newTodo, intValue);
    setTodos([...todos, { value: newTodo, intValue }]);
    setNewTodo('');
  };

  return (
    <View style={styles.contentContainer}>
      <ScrollView>
        {todos.map((todo, index) => (
          <View style={styles.todoItemContainer} key={index}>
            <Text>{`${todo.intValue} - ${todo.value}`}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Todo"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  todoItemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});