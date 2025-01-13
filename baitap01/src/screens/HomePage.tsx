// src/screens/Homepage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang Chủ</Text>
      <Text>Chào mừng bạn đến với trang chính của ứng dụng!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Homepage;