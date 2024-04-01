import React, { useState } from 'react';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState([
    'Do laundry', 
    'Go to gym', 
    'Walk dog'
    ]);

  const addTask = (taskText) => {
    if (!tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  

  return (
    <MainLayout> 
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default HomeScreen;