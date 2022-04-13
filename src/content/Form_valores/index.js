import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import ResultMedia from '../Result_media/index'//importando compónente
import styles from './style'; //importando o style

export default function Form_media () {

  const [Media1, setMedia1] = useState('');
  const [Media2, setMedia2] = useState('');
  const [Media3, setMedia3] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const por = x ;

  function gerarResultado() {
      setTotal(Number(Media1) + Number(Media2) + Number(Media3));
      Keyboard.dismiss();
  }
 

    return (

      <View style={styles.formContext}>
            <View style={styles.form}>


                 {/*campo de digitar*/}
                 <TextInput 
                 style={styles.input}
                 onChangeText={setMedia1}
                 value={Media1}
                 placeholder='Digite a primeira nota.'
                 keyboardType='numeric'//determinado o tipo de teclado
                 
                 />
                 
                 
                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setMedia2}
                   value={Media2}
                   placeholder='Digite a segunda nota.'
                   keyboardType='numeric'//determinado o tipo de teclado

                 />

                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setMedia3}
                   value={Media3}
                   placeholder='Digite a terceira nota.'
                   keyboardType='numeric'//determinado o tipo de teclado

                 />
            <TouchableOpacity
            style={styles.buttonCalculator}
            activeOpacity={0.10}
            onPress={gerarResultado}>
            <Text style={styles.textbuttonCalculator}>Calcular Intervalo</Text>
           </TouchableOpacity>
 
            </View>

            <View style={styles.cardResult}>
				<Text style={styles.numberResult}>
					Total:
					{' '}
					{total.toFixed(1)}
				</Text>

			</View>

			{por < 10 && por > 0 && (
				<Text style={styles.information}>Intervalo 0 - 10</Text>
			)}

			{por >= 11 && por < 20 && (
				<Text style={styles.information}>Intervalo 11 - 20</Text>
			)}

			{por >= 21 && (
				<Text style={styles.information}>Intervalo 21 - indefinido</Text>
			)}

      </View>

    );
  }