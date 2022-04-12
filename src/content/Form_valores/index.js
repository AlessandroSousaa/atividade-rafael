import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import ResultMedia from '../Result_media/index'//importando compónente
import styles from './style'; //importando o style

export default function Form () {

    //calculo de imc

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState("Preencha as notas acima.");
    const [imc, setImc]= useState(null)
    const [TextButton, setTextButton]= useState("Calcular");
    
    function imcCalculator(){
      return setImc ((weight/(height*height)).toFixed(2))
    }
 
    //veriifcar se altura e peso está vazio

    function validationImc() {
      if(weight != null && height !=null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
      }
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("preencha o peso e altura")
    }

    //front end / campos de texto e botões
  
    return (

      //aqui fica os campos para preencher e o botão calcular

      //keyboard type e o tipo de teclado, especificamente o teclado numerico

      <View style={styles.formContext}>
            <View style={styles.form}>


                 {/*campo de digitar*/}
                 <TextInput 
                 style={styles.input}
                 onChangeText={setHeight}
                 value={height}
                 placeholder='Digite o primeiro valor.'
                 keyboardType='numeric'
                 
                 />
                 
                 
                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setWeight}
                   value={weight}
                   placeholder='Digite o segundo valor.'
                   keyboardType='numeric'

                 />

                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setWeight}
                   value={weight}
                   placeholder='Digite o terceiro valor.'
                   keyboardType='numeric'

                 />
               
                 {/*botãos com efeito*/}
                 <TouchableOpacity 
                    style={styles.buttonCalculator}
                    onPress={() =>{
                      validationImc()
                    }}
                 >

                 {/*texto dentro do botão*/}  
                 <Text style={styles.textbuttonCalculator}>{TextButton}</Text>
                 
                 </TouchableOpacity>
                 
            </View> 

           {/*resultado do imc*/}
           <ResultMedia messageResultImc={messageImc} ResultMedia={imc}/> 

      </View>

    );
  }