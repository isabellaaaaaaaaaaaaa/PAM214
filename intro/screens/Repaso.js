import { Text, StyleSheet, View, TextInput, Alert, Button, Switch, ImageBackground, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Repaso() {
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  // Logo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Validación
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validarCampos = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa tu nombre completo');
      return false;
    }

    if (correo.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa tu correo electrónico');
      return false;
    }

    if (!emailRegex.test(correo)) {
      Alert.alert('Error', 'Por favor ingresa un correo válido');
      return false;
    }

    if (!aceptaTerminos) {
      Alert.alert('Error', 'Por favor acepta los términos y condiciones');
      return false;
    }

    return true;
  };

  const registroExitoso = () => {
    if (!validarCampos()) return;
    Alert.alert('Éxito', 'Registro exitoso');
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVKsjdGv3Jnn0DdmcQsdsmm8xNBhR01ZQVg&s://www.google.com/imgres?q=fondos%20de%20pantalla&imgurl=https%3A%2F%2Fmarketplace.canva.com%2FEAGTv65kaa4%2F1%2F0%2F900w%2Fcanva-fondo-pantalla-para-tel%25C3%25A9fono-mo%25C3%25B1o-rosa-minimalista--FQRIStlB64.jpg&imgrefurl=https%3A%2F%2Fwww.canva.com%2Fes_mx%2Ffondos-pantalla-celular%2Fplantillas%2Fbonitos%2F&docid=yfhoA1jx-PkA8M&tbnid=Whmfi3iC1oVqlM&vet=12ahUKEwihhqWx28yQAxXNB-8CHRUyKlQQM3oECFsQAA..i&w=900&h=1600&hcb=2&ved=2ahUKEwihhqWx28yQAxXNB-8CHRUyKlQQM3oECFsQAA' }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Registro de usuario</Text>

          <Text style={styles.label}>Ingresa tu nombre completo:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ej. Isabella Castro Alavez'
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={styles.label}>Ingresa tu correo electrónico:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ej. isabella@gmail.com'
            value={correo}
            onChangeText={setCorreo}
            keyboardType='email-address'
          />

          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Registrarse" color="#6a0dad" onPress={registroExitoso} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 20,
    color: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 25,
    borderRadius: 15,
    width: '85%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  switchText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});