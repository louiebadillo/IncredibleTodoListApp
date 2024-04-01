import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Incredible Todo List App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 30,
    width: '100%',
    backgroundColor: '#009973',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#333',
  },
});

export default Footer;