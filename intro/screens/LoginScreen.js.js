import { StyleSheet, Text, View, Button } from 'react-native'; 
import React, { useState } from 'react'; 

export default function PruebaAhorra() { 
  const [inicio, setInicio] = useState('');

  return ( 
    <View style={styles.container}> 
      <Text style={styles.texto}>AHORRA+</Text>
      
        <Button
          title="Iniciar sesión"
          onPress={mostrarAlerta}
          color="purple"/>
        
        <Text>¿No tienes cuenta? Registrate aquí</Text>
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
 
 
});