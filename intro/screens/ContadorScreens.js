//1. imports : Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import React, {useState, UseState} from 'react'; 
//2. Main : Zona de componentes
export default function App() { 
  const [contador, setContador] = useState(0);
  return ( 
    <View style={styles.container}> 
     <Text style={styles.texto}> Contador:</Text>
     <Text style={styles.texto2}> {contador} </Text>

<View style={styles.contenedorBotones}>
      <Button color={'#50116fff'} title="Agregar" onPress={()=>setContador(contador+1)}/>
      <Button color={'#4d0359ff'}title='Quitar' onPress={()=> setContador(contador-1)}/>
      <Button color={'#6f1a72ff'} title='Reiniciar' onPress={()=> setContador(contador - contador)}/>
</View>
      <StatusBar style="auto" />
    </View>
  );
}

//3. Estilos : Zona de los estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c68decff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color: '#3a045eff',
    fontSize: 30,
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',

  },

  texto2:{
    color: '#7600c5ff',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '900',
    textDecorationLine: 'underline',
  },

  contenedorBotones: {
    marginTop:15,
    flexDirection:'row',
    gap: 20,
  },

});
