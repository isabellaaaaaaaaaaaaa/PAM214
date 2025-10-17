import { Text, StyleSheet, View, Pressable, TouchableOpacity, TouchableWithoutFeedback, Switch} from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function BotonesScreen() {
  const [accion, setAccion] = useState ('nada');
  const [isDisable, setIsDisable] = useState(false);
  return (
    <View style={styles.container}>  
    <Text>
      Activado:   
    </Text>  
    <Switch
      onValueChange={(valor) => setIsDisable(!isDisable)}
       value={!isDisable}
     />
      <Text>
        {accion}
      </Text>
      <Pressable
        onPressIn ={() => setAccion('PressableIn')}
        onPressOut ={() => setAccion('PressableOut')}
        onLongPress ={() => setAccion('Pressable Long')}
        disabled={isDisable}
        > 
        {({pressed}) => (
          <View style={[styles.card, !pressed && styles.shadow]}> 
          <View style={styles.mockImage}/>
          <text> 
         { pressed ? 'Tarjeta presionada' : 'Tarjeta no presionada'} 
          </text>
        </View> 
        )}
      
      </Pressable>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={()=> setAccion('Opacity')}
        disabled={isDisable}
      > 
       <View style={[styles.card, styles.shadow]}> 
        <View style= {styles.mockImage}/>
          <Text>
            esta es una Tarjeta
          </Text>
        </View> 
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={()=> setAccion('Without Feedback')}
        disabled={isDisable}
      >
         <View style={[styles.card, styles.shadow]}> 
        <View style= {styles.mockImage}/>
          <Text>
            esta es una Tarjeta
          </Text>
        </View> 
      </TouchableWithoutFeedback>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 200,
        height: 250,
        padding: 20,
        display: "flex",
        flexDirection: 'column',
        borderRadius: 8,
        margin: 15
    },
    mockImage: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom: 8,
        borderRadius: 8
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
    },
});