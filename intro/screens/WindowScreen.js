import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function SizeExample() {
  // Estado para guardar las dimensiones
  const [windowSize, setWindowSize] = useState(Dimensions.get('window'));
  const [screenSize, setScreenSize] = useState(Dimensions.get('screen'));

  useEffect(() => {
    // Escucha cambios de orientación o tamaño
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setWindowSize(window);
      setScreenSize(screen);
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparando tamaños:</Text>

      <View style={[styles.box, { height: windowSize.height / 5, width: windowSize.width / 2 }]}>
        <Text style={styles.text}>window:</Text>
        <Text style={styles.text}>{windowSize.width} x {windowSize.height}</Text>
      </View>

      <View style={[styles.box, { backgroundColor: '#00BFFF', height: screenSize.height / 5, width: screenSize.width / 2 }]}>
        <Text style={styles.text}>screen:</Text>
        <Text style={styles.text}>{screenSize.width} x {screenSize.height}</Text>
      </View>

      <Text style={styles.note}>➡️ Gira tu dispositivo o abre el teclado para ver cómo cambia “window”.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#8A2BE2',
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  note: {
    color: '#bbb',
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
  },
});
