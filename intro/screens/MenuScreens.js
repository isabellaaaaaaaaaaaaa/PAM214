import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'; 
import ContadorScreens from './ContadorScreens'
import BotonesScreen from './BotonesScreen'
import BottomSheet from './BottomSheet';
import WindowScreens from './WindowScreen'

export default function MenuScreens() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'Contador':
      return <ContadorScreens />
    case 'Botones':
      return <BotonesScreen />
    case 'Bottom Sheet':
      return <BottomSheet />
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Menu de Prácticas</Text>
          <Button onPress={() => setScreen('Contador')} title='Pract: Contador' />
          <Button onPress={() => setScreen('Botones')} title='Pract: Botones' />
           <Button onPress={() => setScreen('Bottom Sheet')} title='Pract: BottomSheet' />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 20,

    fontWeight: 'bold'
  }
});
