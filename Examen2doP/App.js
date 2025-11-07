import { Text, StyleSheet, View, TextInput, Alert, Button, Switch, ImageBackground, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

// Splashscreen de 4 seg, pantalla prinicpal imagen toda la pantalla, 
// view en fondo centrado, semi tranparente, contenedor: Nombre completo
//, Profesión/Título, Breve biografía (2-3 líneas), Correo electrónico, Número de teléfono
//Button con el texto “Editar Perfil” que al presionarse muestre un Alert con dos opciones: “Guardar” y “Cancelar”
//este con scroolview
export default function App() { 

  const [showSplash, setShowSplash] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);


     if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Cargando...</Text>
      </View>
    );
  }

  const opciones = () => {
    if (onPress(EditarPefil)) return;
    Alert.alert(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button title="Guardar" color="#6a0dad" onPress={opciones} /> </View>
         <View style={styles.buttonContainer}>
            <Button title="Cancelar" color="#6a0dad" onPress={opciones} /> </View>
      </View>
    );
  };
  return (

        <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.label}>Mi perfil: </Text>
            <Text> 
              Holaaa bienvenido a mi perfil!!!
              Mi Nombre es Isabella Catsro Alavez
              La profesion o mi titulo siguen en proceso, peor ya pronto serán una realidad
              Si habamos de biografias
              f
              false
              false
              Mi correo electronico es isabqgmail.com o 124051197@upq.edu-mx
              Y mi num de telefomo es personal
            </Text>

            
              <View style={styles.buttonContainer}>
            <Button title="Editar perfil" color="#6a0dad" onPress={opciones} />
              </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  splashText: {
    fontSize: 24,
    color: '#fff',
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden', // Para que el botón respete los bordes redondeados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra en Android
  },

});