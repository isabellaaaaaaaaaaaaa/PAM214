import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import React, { useState } from 'react';  // 👈 quita UseState

export default function ContadorScreen() { 
  const [contador, setContador] = useState(855);

  return ( 
    <View style={styles.container}> 
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}> 
        <Button color="pink" title="Agregar" onPress={() => setContador(contador + 1)} /> 
        <Button color="pink" title="Quitar" onPress={() => setContador(contador - 1)} />
        <Button color="pink" title="Reiniciar" onPress={() => setContador(0)} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a665bbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#8d2595ff',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  texto2: {
    color: '#9d15caff',
    fontSize: 40,
    fontFamily: 'Times New Roman',
    fontWeight: '900',
    textDecorationLine: 'underline',
  },
  contenedorBotones: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
  },
});