import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useCountdown from './useCountDown';

interface TimeProps {
  reset: number;
}

const Time = ({ reset }: TimeProps) => {
  const time = useCountdown(10, reset); // Starting from 10 seconds

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{time} giây</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Time;