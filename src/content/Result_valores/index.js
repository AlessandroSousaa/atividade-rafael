import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'//importando o style

export default function Result_valores (props) {
  
    return (

      <View style={styles.resultValores}>

        <Text style={styles.information}>{props.messageResultValores}</Text>
        <Text style={styles.numberValores}>{props.ResultValores}</Text>
       
      </View>

    );
  }