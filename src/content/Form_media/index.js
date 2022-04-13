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
  const por = x / 3;

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
                 placeholder='Insira a primeira nota.'
                 keyboardType='numeric'//determinado o tipo de teclado
                 
                 />
                 
                 
                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setMedia2}
                   value={Media2}
                   placeholder='Insira a segunda nota.'
                   keyboardType='numeric'//determinado o tipo de teclado

                 />

                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setMedia3}
                   value={Media3}
                   placeholder='Insira a terceira nota.'
                   keyboardType='numeric'//determinado o tipo de teclado

                 />
            <TouchableOpacity
            style={styles.buttonCalculator}
            activeOpacity={0.7}
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
				<Text style={styles.numberResult}>
					Média:
					{' '}
					{por.toFixed(1)}
				</Text>
			</View>

			{por < 5 && por > 0 && (
				<Text style={styles.information}>Você foi reprovado</Text>
			)}

			{por >= 5 && por < 7 && (
				<Text style={styles.information}>Recuperação</Text>
			)}

			{por >= 7 && (
				<Text style={styles.information}>Você foi aprovado</Text>
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