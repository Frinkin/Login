import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert, Text, View, ImageComponent } from 'react-native';
import Buttton from './components/Buttons';
import InputBox from './components/InputBox';
import Lago from './components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Lago/>
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
