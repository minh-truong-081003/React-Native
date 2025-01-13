import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationProp, useIsFocused } from '@react-navigation/native';
import Time from '../components/ShowTime/Time';

const IntroScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const isFocused = useIsFocused();
  const [resetCount, setResetCount] = useState(0);

  useEffect(() => {
    if (isFocused) {
      setResetCount(prev => prev + 1); // Increment to trigger reset
      const timer = setTimeout(() => {
        navigation.navigate('Homepage');
      }, 10000); // Chờ 10 giây
      return () => clearTimeout(timer);
    }
  }, [isFocused, navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/avt.jpg')} style={styles.image} />
      <Text style={styles.text}>Xin chào, tôi là Nguyễn Minh Trường</Text>
      <Text style={styles.text}>Mã số sinh viên: 21110339</Text>
      <Time reset={resetCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default IntroScreen;