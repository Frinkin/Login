import { StyleSheet,Alert, Text, Pressable } from 'react-native';

export default function Buttton({label}) {
  return (
    <Pressable
    style={styles.buto}
    onPress={()=>Alert.alert("sup!")}
    >
      <Text textDecorationColor="white">{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buto: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    textDecorationColor: 'white',
    backgroundColor: 'grey',
  },
});
