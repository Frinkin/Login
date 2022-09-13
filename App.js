import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert, Text, View, ImageComponent } from 'react-native';
import Buttton from './components/Buttons';
import InputBox from './components/InputBox';
import Lago from './components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Lago srck="../assets/q6p8QmUl_400x400.png"/>
      <InputBox txtlabel="Account"/>
      <InputBox txtlabel="Password"/>
      <Buttton label="Why so serious?"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
});
