import { StatusBar } from 'expo-status-bar';
import { Text, View , TextInput} from 'react-native';
import { stylesSignIn } from './styles';
import {useState } from 'react' ;

export  function SignIn() {
  const[text,setText] = useState("");
  return (
    <View style={stylesSignIn.container}>
      <Text>Digite algo.</Text>
      <TextInput style = {stylesSingIn.textInput} onChangeText = {setText}/>
      <StatusBar style="auto" />
      <Text>Você Digitou : {text}</Text>
    </View>
  );
}


