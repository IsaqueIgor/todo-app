import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks([
      ...tasks,
      {
        done: false,
        id: new Date().getTime(),
        title: newTaskTitle,
      },
    ]);
  }

  function handleToggleTaskDone(id: number) {
    const newTasks = [...tasks];
    newTasks
      .filter((task) => {
        return task.id === id;
      })
      .map((task) => {
        task.done = !task.done;
      });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    console.log('handleRemoveTask');
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
});
