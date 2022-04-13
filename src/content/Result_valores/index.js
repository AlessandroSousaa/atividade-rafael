import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'//importando o style

export default function Result_Valores (props) {
  
    return (

      <View style={styles.Result_Valores}>

        <Text style={styles.information}>{props.messageResultMedia}</Text>
        <Text style={styles.numberMedia}>{props.ResultMedia}</Text>
       
      </View>

    );
  }