import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreens from './ContadorScreens'
import BotonesScreen from './BotonesScreen'
import BottomSheet from './BottomSheet'
import TextInput from './TextInput'
import ImageBackground from './ImageBackground'
import Repaso from './Repaso1'
import Scrollview from './Scrollview'
import ActivityScreen from './ActivityScreen'
export default function MenuScreens() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'Contador':
      return <ContadorScreens />
    case 'Botones':
      return <BotonesScreen />
    case 'TextInput':
      return <TextInput />
    case 'Bottom Sheet':
      return <BottomSheet />
    case 'ImageBackground':
      return <ImageBackground />
    case 'Repaso' :
      return <Repaso />
    case 'Scrollview':
      return <Scrollview />;
    case 'Activity':
      return <ActivityScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Menu de Prácticas</Text>
          <Button color="purple" onPress={() => setScreen('Contador')} title='Pract: Contador' />
          <Button color="purple" onPress={() => setScreen('Botones')} title='Pract: Botones' />
          <Button color="purple" onPress={() => setScreen('Bottom Sheet')} title='Pract: BottomSheet' />
          <Button color="purple" onPress={() => setScreen('TextInput')} title='Pract: TextInput' />
          <Button color="purple" onPress={() => setScreen('ImageBackground')} title='Pract: ImageBackground' />
          <Button color="purple" onPress={() => setScreen('Repaso')} title='Pract: Repaso1' />
           <Button color="purple" onPress={() => setScreen('Scrollview')} title="Pract: Scrollview" />
          <Button color="purple" onPress={() => setScreen('Activity')} title="Pract: ActivityIndicator" />
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