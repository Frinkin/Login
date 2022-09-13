import React from 'react';
import { StyleSheet,Image } from 'react-native';

export default function Lago() {
  return (
    <Image
        style={styles.lago2}
        source={require('../assets/q6p8QmUl_400x400.png')}
      />
  );
}
const styles = StyleSheet.create({
    lago2: {
        width: 100,
        height: 100,
        backgroundColor: "red",
      },
});
