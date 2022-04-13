import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import ResultMedia from '../Result_media/index'
import styles from './style';

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
                 placeholder='Insira o primeiro número.'
                 keyboardType='numeric'
                 
                 />
                 
                 
                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setMedia2}
                   value={Media2}
                   placeholder='Insira o segundo número.'
                   keyboardType='numeric'

                 />

                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setMedia3}
                   value={Media3}
                   placeholder='Insira o terceiro número.'
                   keyboardType='numeric'

                 />
            <TouchableOpacity
            style={styles.buttonCalculator}
            activeOpacity={0.10}
            onPress={gerarResultado}>
            <Text style={styles.textbuttonCalculator}>RESULTADO</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={styles.card}
            activeOpacity={0.10}>
           </TouchableOpacity>
 
            </View>

            <View style={styles.cardResult}>
				<Text style={styles.numberResult}>
				  Total:{' '}
					{total.toFixed(1)}
          
				</Text>

			</View>

			{por < 10 && por > 0 && (
				<Text style={styles.information}>INTERVALO 0 - 10</Text>
			)}

			{por >= 11 && por < 20 && (
				<Text style={styles.information}>INTERVALO 11 - 20</Text>
			)}

			{por >= 21 && (
				<Text style={styles.information}>INTERVALO 21 - indefinido</Text>
			)}

      </View>

    );
  }