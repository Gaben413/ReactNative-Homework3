import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from "react"

export default function App() {

  const [ligar1, setLigar1] = useState(true);
  const [texto1, setTexto1] = useState('APERTAR');

  const [ligar2, setLigar2] = useState(true);
  const [texto2, setTexto2] = useState('APERTAR');


  const clicarBotao1 = () =>{
    setLigar1(!ligar1);
  }

  const clicarBotao2 = () =>{
    setLigar2(!ligar2);
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>

        {
          ligar1 ?
            <Text> </Text>
            :
            <Text style={styles.text}> Aqui tem um texto que desaparece! </Text>
        }

        <Button
          title={texto1}
          onPress={clicarBotao1}
        />
        
        {
          ligar2 ?
            <Text> </Text>
            :
            <Text style={styles.text}> Aqui tem um texto que desaparece! </Text>
        }

        <Button
          title={texto2}
          onPress={clicarBotao2}
      />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:
  {
    width: '100%'
  },
  text:
  {
    textAlign: 'center'
  }
});
