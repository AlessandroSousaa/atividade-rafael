import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 

export default function Title_Valores() {
    
    //aqui fica o titulo dos forms

    return (
      
      <View style={styles.boxTitle}>

        <Text style={styles.textTitle}>Calcular Valores</Text>

      </View>

    );
  }