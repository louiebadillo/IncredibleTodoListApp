import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout.jsx';

function AboutScreen() {
  const appName = "My To Do List App";
  const myName = "Mark Badillo";
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.appName}>{appName}</Text>
        <Text style={styles.myName}>Created by: {myName}</Text>
        <Text style={styles.date}>Current Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  myName: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
});

export default AboutScreen;