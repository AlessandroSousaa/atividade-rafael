import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import Result_Valores from '../Result_Valores/index'//importando compónente
import styles from './style'; //importando o style

export default function Form_Valores () {

  const [Valores1, setValores1] = useState('');
  const [Valores2, setValores2] = useState('');
  const [Valores3, setValores3] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const por = x ;

  function gerarResultado() {
      setTotal(Number(Valores1) + Number(Valores2) + Number(Valores3));
      Keyboard.dismiss();
  }
 

    return (

      <View style={styles.formContext}>
            <View style={styles.form}>


                 {/*campo de digitar*/}
                 <TextInput 
                 style={styles.input}
                 onChangeText={setValores1}
                 value={Valores1}
                 placeholder='Insira o primeiro número.'
                 keyboardType='numeric'//determinado o tipo de teclado
                 
                 />
                 
                 
                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setValores2}
                   value={Valores2}
                   placeholder='Insira o segundo número.'
                   keyboardType='numeric'//determinado o tipo de teclado

                 />

                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setValores3}
                   value={Valores3}
                   placeholder='Insira o terceiro número.'
                   keyboardType='numeric'//determinado o tipo de teclado

                 />

            <TouchableOpacity
            style={styles.buttonCalculator}
            activeOpacity={0.10}
            onPress={gerarResultado}>
          <Text style={styles.textbuttonCalculator}>Calcular</Text>
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
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </View>

    );
  }